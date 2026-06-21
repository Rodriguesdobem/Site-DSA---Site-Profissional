# Tenda do Ozi Gastrobar

Projeto separado em **frontend React/Vite** e **backend Java Spring Boot** para cardapio digital, carrinho, finalizacao via WhatsApp e area administrativa.

## Estrutura

```text
backend/   API REST em Java com Spring Boot
frontend/  Interface ReactJS com Vite
```

## Como rodar o backend

Requisito: Java 17.

Nao precisa instalar Maven globalmente, pois o projeto usa Maven Wrapper.

```bash
cd backend
.\mvnw.cmd spring-boot:run
```

API local:

```text
http://localhost:8080/api
```

Endpoints principais:

- `GET /api/business`
- `POST /api/auth/login`
- `GET/POST/PUT/DELETE /api/products`
- `GET/POST/PUT/DELETE /api/categories`
- `GET/POST/PUT/DELETE /api/promotions`
- `GET/POST /api/orders`
- `PATCH /api/orders/{id}/status`

## Como rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend local:

```text
http://127.0.0.1:5173
```

Por padrao, o frontend chama:

```text
http://localhost:8080/api
```

Para trocar a URL da API, crie `frontend/.env`:

```env
VITE_API_URL=http://localhost:8080/api
```

## Builds e testes

Backend:

```bash
cd backend
.\mvnw.cmd test
```

Frontend:

```bash
cd frontend
npm run lint
npm run build
```

## Login Admin

- Usuario: `admin`
- Senha: `admin123`

O login ainda e simulado, mas agora e validado pelo endpoint `POST /api/auth/login`.

## Dados

O backend inicia com os dados reais do cardapio da Tenda do Ozi Gastrobar:

- Espetos Tradicionais
- Acompanhamento
- Espetos Especiais
- Kafta Recheada
- Petisco da Tenda
- Bebidas

Neste MVP nao ha banco de dados. Os dados ficam em memoria no Spring Boot e reiniciam quando o backend e parado. A estrutura ja esta separada para evoluir depois para banco de dados, autenticacao real e pagamento online.

## Deploy

Frontend na Vercel:

1. Configure o projeto apontando para a pasta `frontend`.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Configure `VITE_API_URL` com a URL publica do backend.

Backend:

Pode ser publicado em servicos que suportem Java/Spring Boot, como Render, Railway, Fly.io ou servidor proprio. O comando de build e:

```bash
.\mvnw.cmd clean package
```

O arquivo `.jar` sera gerado em `backend/target/`.
