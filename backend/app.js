// app.js
const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
// Middleware para analisar o corpo das requisições em JSON
app.use(express.json());
app.use(cors());
// Importando as rotas do cliente
const rotas = require('./routes/rotas');
// Usando as rotas do cliente com o prefixo '/clientes'
app.use('/', rotas);
// Iniciando o servidor na porta especificada
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});

