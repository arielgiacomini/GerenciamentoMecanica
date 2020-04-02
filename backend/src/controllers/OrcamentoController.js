const connection = require('../database/connection');

module.exports = {

    async GetOrcamentoForAll(request, response) {
        const { page = 1 } = request.query;

        const orcamentos = await connection('Orcamento')
            .limit(5)
            .offset(( page - 1 ) * 5)
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