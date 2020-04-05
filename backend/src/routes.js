const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const ClienteVeiculoController = require('./controllers/ClienteVeiculoController');
const ColaboradorController = require('./controllers/ColaboradorController');
const MaodeObraController = require('./controllers/MaodeObraController');
const OrcamentoController = require('./controllers/OrcamentoController');
const OrcamentoMaodeObraController = require('./controllers/OrcamentoMaodeObraController');
const OrcamentoPecaController = require('./controllers/OrcamentoPecaController');
const PecaController = require('./controllers/PecaController');
const ServicoController = require('./controllers/ServicoController');
const ServicoMaodeObraController = require('./controllers/ServicoMaodeObraController');
const ServicoPecaController = require('./controllers/ServicoPecaController');
const VeiculoController = require('./controllers/VeiculoController');

const routes = express.Router();

routes.get('/cliente', ClienteController.GetClientesForAll);
routes.post('/cliente', ClienteController.CriarCliente);
routes.delete('/cliente/:id', ClienteController.DeletarCliente);

routes.get('/cliente-veiculo', ClienteVeiculoController.GetClienteVeiculoForAll);
routes.post('/cliente-veiculo', ClienteVeiculoController.CriarClienteVeiculo);
routes.delete('/cliente-veiculo/:id', ClienteVeiculoController.DeletarClienteVeiculo);

routes.post('/colaborador/logOn', ColaboradorController.SessaoLogar);
routes.post('/colaborador/', ColaboradorController.CriarColaborador);
routes.get('/colaborador', ColaboradorController.GetColaboradorForAll);
routes.delete('/colaborador/:id', ColaboradorController.DeletarColaborador);

routes.get('/mao-de-obra', MaodeObraController.GetMaodeObraForAll);
routes.post('/mao-de-obra', MaodeObraController.CriarMaodeObra);
routes.delete('/mao-de-obra/:id', MaodeObraController.DeletarMaodeObra);

routes.get('/orcamento', OrcamentoController.GetOrcamentoForAll);
routes.post('/orcamento', OrcamentoController.CriarOrcamento);
routes.delete('/orcamento/:id', OrcamentoController.DeletarOrcamento);

routes.get('/orcamento-mao-de-obra', OrcamentoMaodeObraController.GetOrcamentoMaodeObraForAll);
routes.post('/orcamento-mao-de-obra', OrcamentoMaodeObraController.CriarOrcamentoMaodeObra);
routes.delete('/orcamento-mao-de-obra/:id', OrcamentoMaodeObraController.DeletarOrcamentoMaodeObra);

routes.get('/orcamento-peca', OrcamentoPecaController.GetOrcamentoPecaForAll);
routes.post('/orcamento-peca', OrcamentoPecaController.CriarOrcamentoPeca);
routes.delete('/orcamento-peca/:id', OrcamentoPecaController.DeletarOrcamentoPeca);

routes.get('/peca', PecaController.GetPecaForAll);
routes.post('/peca', PecaController.CriarPeca);
routes.delete('/peca/:id', PecaController.DeletarPeca);

routes.get('/servico', ServicoController.GetServicoForAll);
routes.post('/servico', ServicoController.CriarServico);
routes.delete('/servico/:id', ServicoController.DeletarServico);

routes.get('/servico-mao-de-obra', ServicoMaodeObraController.GetServicoMaodeObraForAll);
routes.post('/servico-mao-de-obra', ServicoMaodeObraController.CriarServicoMaodeObra);
routes.delete('/servico-mao-de-obra/:id', ServicoMaodeObraController.DeletarServicoMaodeObra);

routes.get('/servico-peca', ServicoPecaController.GetServicoPecaForAll);
routes.post('/servico-peca', ServicoPecaController.CriarServicoPeca);
routes.delete('/servico-peca/:id', ServicoPecaController.DeletarServicoPeca);

routes.get('/veiculo', VeiculoController.GetVeiculoForAll);
routes.post('/veiculo', VeiculoController.CriarVeiculo);
routes.delete('/veiculo/:id', VeiculoController.DeletarVeiculo);

module.exports = routes;