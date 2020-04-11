const connection = require('../database/connection');

module.exports = {

    async GetOrcamentoForAll(request, response) {
        const { page = 1 } = request.query;

        const orcamentos = await connection('Orcamento')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .innerJoin('Cliente', 'Cliente.ClienteId', 'Orcamento.ClienteId')
            .select('*');

        const [contagem] = await connection('Orcamento').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(orcamentos);
    },
    async CriarOrcamento(request, response) {
        const {
            ClienteId, 
            Descricao,
            ValorAdicional, 
            PercentualDesconto,
            ValorDesconto,
            ValorTotal,
            Status
         } = request.body;
 
     const [Id] = await connection('Orcamento')
        .insert({
            ClienteId, 
            Descricao,
            ValorAdicional, 
            PercentualDesconto,
            ValorDesconto,
            ValorTotal,
            Status
     })
 
     return response.json({ Id });
    },
    async DeletarOrcamento(request, response) {
        const { id } = request.params;
        
        await connection('Orcamento').where('OrcamentoId', id).delete();

        return response.status(204).send();
    },
    async GetOrcamentoInformacoesDetalhadaDoCliente(request, response) {
        debugger;
        const { page = 1 } = request.query;

        const orcamentosComInformacoesClientes = await connection('Orcamento')
        .limit(5)
        .offset((page - 1) * 5)
        .innerJoin('Cliente', 'Cliente.ClienteId', 'Orcamento.ClienteId')
        .select(
                'Cliente.ClienteId', 
                'Cliente.NomeCliente',
                'Cliente.Apelido',
                'Cliente.TelefoneCelular', 
                'Cliente.DataCadastro',
                'Cliente.Email',
                'Cliente.LogradouroBairro',
                'Orcamento.OrcamentoId',
                'Orcamento.Descricao AS DescricaoOrcamento',
                'Orcamento.ValorAdicional',
                'Orcamento.PercentualDesconto',
                'Orcamento.ValorDesconto',
                'Orcamento.ValorTotal',
                'Orcamento.Status AS StatusOrcamento'
                )
        .orderBy('Orcamento.DataCadastro', 'desc')

        const now = Date.now();
        const [contagem] = await connection('Orcamento').count();

        response.header('X-Total-Count', contagem['count(*)']);
                
        return response.json(orcamentosComInformacoesClientes);
    }
};