const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const OrcamentoController = require('./controllers/OrcamentoController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.SessionLogar);

routes.get('/cliente', ClienteController.GetClientesForAll);
routes.post('/cliente', ClienteController.CriarCliente);
routes.delete('/cliente/:id', ClienteController.DeletarCliente);

routes.get('/orcamento', OrcamentoController.GetOrcamentoForAll);
routes.post('/orcamento', OrcamentoController.CriarOrcamento);
routes.delete('/orcamento/:id', OrcamentoController.DeletarOrcamento);

module.exports = routes;