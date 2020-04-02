const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const OrcamentoController = require('./controllers/OrcamentoController');
const ColaboradorController = require('./controllers/ColaboradorController');
const VeiculoController = require('./controllers/VeiculoController');
const ClienteVeiculoController = require('./controllers/ClienteVeiculoController');
const OrcamentoMaodeObraController = require('./controllers/OrcamentoMaodeObraController');


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

routes.get('/veiculo', VeiculoController.GetVeiculoForAll);
routes.post('/veiculo', VeiculoController.CriarVeiculo);
routes.delete('/veiculo/:id', VeiculoController.DeletarVeiculo);

routes.get('/cliente-veiculo', ClienteVeiculoController.GetClienteVeiculoForAll);
routes.post('/cliente-veiculo', ClienteVeiculoController.CriarClienteVeiculo);
routes.delete('/cliente-veiculo/:id', ClienteVeiculoController.DeletarClienteVeiculo);

routes.get('/orcamento-mao-de-obra', OrcamentoMaodeObraController.GetOrcamentoMaodeObraForAll);
routes.post('/orcamento-mao-de-obra', OrcamentoMaodeObraController.CriarOrcamentoMaodeObra);
routes.delete('/orcamento-mao-de-obra/:id', OrcamentoMaodeObraController.DeletarOrcamentoMaodeObra);

module.exports = routes;