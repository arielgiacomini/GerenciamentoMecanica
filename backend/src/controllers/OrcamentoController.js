const connection = require('../database/connection');

module.exports = {

    async GetOrcamentoForAll(request, response) {

        const orcamentos = await connection('Orcamento').select('*');

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
            Status,
            Ativo,
            DataCadastro
         } = request.body;
 
     const [Id] = await connection('Orcamento')
        .insert({
            ClienteId, 
            Descricao,
            ValorAdicional, 
            PercentualDesconto,
            ValorDesconto,
            ValorTotal,
            Status,
            Ativo,
            DataCadastro
     })
 
     return response.json({ Id });
    },
    async DeletarOrcamento(request, response) {
        const { id } = request.params;
        
        await connection('Orcamento').where('OrcamentoId', id).delete();

        return response.status(204).send();
    }
};