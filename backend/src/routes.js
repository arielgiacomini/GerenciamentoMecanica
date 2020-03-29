const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const OrcamentoController = require('./controllers/OrcamentoController');
const ColaboradorController = require('./controllers/ColaboradorController');

const routes = express.Router();

routes.post('/colaborador/logOn', ColaboradorController.SessaoLogar);
routes.post('/colaborador/', ColaboradorController.CriarColaborador);
routes.get('/colaborador', ColaboradorController.GetColaboradorForAll);
routes.delete('/colaborador/:id', ColaboradorController.DeletarColaborador);

routes.get('/cliente', ClienteController.GetClientesForAll);
routes.post('/cliente', ClienteController.CriarCliente);
routes.delete('/cliente/:id', ClienteController.DeletarCliente);

routes.get('/orcamento', OrcamentoController.GetOrcamentoForAll);
routes.post('/orcamento', OrcamentoController.CriarOrcamento);
routes.delete('/orcamento/:id', OrcamentoController.DeletarOrcamento);

module.exports = routes;