import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get()
  getData() {
    return {
      message: 'Visão geral do sistema',
      usuarios: 123,
      vendas: 76,
      atualizado_em: new Date(),
    };
  }
}
