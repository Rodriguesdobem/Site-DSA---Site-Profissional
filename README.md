# Tenda do Ozi Gastrobar

Site em ReactJS com Vite para cardapio digital, carrinho com pedido minimo e finalizacao pelo WhatsApp. Inclui area administrativa simulada com CRUDs em `localStorage`.

## Como rodar

```bash
npm install
npm run dev
```

Para gerar o build:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Acessos

- Site do cliente: `/`
- Admin: `/admin/login`
- Usuario: `admin`
- Senha: `admin123`

## Configuracoes faceis de alterar

Os dados do estabelecimento ficam em:

```text
src/config/businessConfig.js
```

Nesse arquivo voce pode trocar:

- numero do WhatsApp
- pedido minimo
- endereco
- horario de funcionamento
- links de mapa e redes sociais

## Dados iniciais

Os mocks ficam em:

```text
src/data/productsMock.js
src/data/categoriesMock.js
src/data/promosMock.js
src/data/ordersMock.js
```

Produtos, categorias, promocoes e pedidos editados pelo admin sao salvos no navegador com `localStorage`.

## Funcionalidades

- Home responsiva com destaque do estabelecimento.
- Cardapio real com busca e filtro por categoria.
- Carrinho com quantidade, subtotal, total e pedido minimo de R$ 15,00.
- Finalizacao via WhatsApp com mensagem automatica.
- Promocoes simuladas com botao de adicionar ao carrinho.
- Contato com endereco, horario, WhatsApp, mapa e redes sociais.
- Login admin simulado.
- Dashboard com indicadores.
- CRUD de produtos, categorias e promocoes.
- Tela de pedidos simulados com troca de status.

## Deploy na Vercel

1. Suba o projeto para um repositorio GitHub.
2. Entre em https://vercel.com e crie um novo projeto.
3. Selecione o repositorio.
4. Use as configuracoes padrao do Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em Deploy.

## Planejamento por sprints

1. Estrutura base: Vite, rotas, layout, mocks e configuracao do estabelecimento.
2. Area do cliente: Home, Cardapio, Promocoes, Contato e cards.
3. Carrinho e WhatsApp: itens, totais, pedido minimo e mensagem automatica.
4. Admin base: login, dashboard e menu administrativo.
5. CRUDs: produtos, categorias e promocoes com `localStorage`.
6. Pedidos, ajustes e deploy: status dos pedidos, responsividade, build e Vercel.
