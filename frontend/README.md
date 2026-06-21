# Tenda do Ozi Gastrobar - Frontend

Interface React com Vite.

## Rodar localmente

```bash
npm install
npm run dev
```

URL local:

```text
http://127.0.0.1:5173
```

## Variaveis de ambiente

Crie um arquivo `.env` baseado em `.env.example`:

```env
VITE_API_URL=http://localhost:8080/api
```

Na Vercel, configure `VITE_API_URL` com a URL publica do backend no Render:

```text
https://SEU-BACKEND.onrender.com/api
```

## Deploy na Vercel

Se este frontend estiver em um repositorio separado, use:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

Nao esqueca de configurar a variavel `VITE_API_URL`.
