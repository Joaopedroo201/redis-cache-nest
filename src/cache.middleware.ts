import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

let redisClient;

@Injectable()
export class CacheMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {
    if (!redisClient) {
      redisClient = createClient({
        url: this.configService.get('REDIS_URL'),
      });

      redisClient.connect().catch(console.error);
    }
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const key = `cache:${req.originalUrl}`;
    const cached = await redisClient.get(key);

    if (cached) {
      return res.send(JSON.parse(cached));
    }

    const originalSend = res.send.bind(res);
    const ttl = parseInt(this.configService.get('CACHE_TTL') || '60');

    res.send = (body: any): Response => {
      redisClient.setEx(key, ttl, JSON.stringify(body)).catch(console.error);
      return originalSend(body);
    };

    next();
  }
}
