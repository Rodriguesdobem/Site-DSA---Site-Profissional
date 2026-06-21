# Tenda do Ozi Gastrobar - Backend

API REST em Java 17 com Spring Boot.

## Rodar localmente

```bash
./mvnw spring-boot:run
```

No Windows:

```bash
.\mvnw.cmd spring-boot:run
```

API local:

```text
http://localhost:8080/api
```

## Variaveis de ambiente

```text
PORT=8080
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

No Render, configure `CORS_ALLOWED_ORIGINS` com a URL do frontend na Vercel.

Exemplo:

```text
https://tenda-do-ozi.vercel.app
```

## Deploy no Render

Configure como Web Service:

```text
Runtime: Java
Build Command: ./mvnw clean package -DskipTests
Start Command: java -jar target/backend-0.0.1-SNAPSHOT.jar
```

O arquivo `render.yaml` tambem pode ser usado como base.
