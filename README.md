
# 🚀 Projeto NestJS com Middleware de Cache (Redis)

Este projeto demonstra o uso de um middleware personalizado no NestJS para cachear respostas de rotas HTTP utilizando Redis.

---

## 📦 Tecnologias

- NestJS
- Redis
- Node.js
- TypeScript

---

## 📁 Estrutura de Rotas

| Rota         | Descrição                         |
|--------------|-----------------------------------|
| `/products`  | Lista de produtos variados (100+) |
| `/dashboard` | Dados simulados de painel admin   |

---

## ⚙️ Como executar o projeto

### 1. Clone este repositório e acesse ele

```bash
cd redis-cache-nest
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz com o seguinte conteúdo:

```env
REDIS_URL=redis://127.0.0.1:6379
CACHE_TTL=60
```

---

### 4. Execute o Redis localmente

> Você pode rodar via Docker ou instalar o Redis localmente.

#### ▶️ Usando Docker:

```bash
docker run --name redis-cache -p 6379:6379 -d redis
```

#### 🧱 Ou instale manualmente:
- [Redis para Windows (tporadowski)](https://github.com/tporadowski/redis/releases)
- Linux/macOS: via apt/brew

---

### 5. Inicie o projeto

```bash
npm run start:dev
```

---

### 6. Testar no navegador ou Insomnia/Postman

- `http://localhost:3000/products`
- `http://localhost:3000/dashboard`

As respostas são armazenadas em cache pelo Redis. Ao fazer múltiplas requisições dentro do tempo definido (`CACHE_TTL`), a resposta será retornada do cache.

---

### 🔁 Testar o cache manualmente

#### Verificar chaves:

```bash
redis-cli keys *
```

#### Ver conteúdo da cache:

```bash
redis-cli get cache:/products
```

#### Remover manualmente uma chave:

```bash
redis-cli del cache:/products
```

---

### ✅ Exemplo de retorno `/products`

```json
{
  "message": "Lista de produtos",
  "produtos": [ "Café", "Leite", "...mais de 100 itens..." ],
  "data": "2025-06-15T21:35:14.000Z"
}
```