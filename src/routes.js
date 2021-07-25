const express = require('express');

const routes = express.Router();

const Produto = require('./controllers/produtos.controller')

routes.get('/',Produto.index);

routes.post('/api/produtos',Produto.create);
routes.get('/api/produtos',Produto.index);

module.exports = routes;