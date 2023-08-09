# Criado App ReactJS de exemplo com Webpack e Babel.

Comandos pra executar o projeto React usando Babel e WebPack:

yarn babel src/index.jsx --out-file dist/bundle.js
yarn webpack (gera bundle.js e usado para production)
yarn webpack serve (não gera bundle.js e usado para development)
yarn dev (este executa webpack serve e por isto não gera bundle)
yarn build (este executa webpack e gera bundle.js para ser usado em production)
