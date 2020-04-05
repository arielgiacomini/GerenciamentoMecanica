const connection = require('../database/connection');

module.exports = {

    async GetServicoForAll(request, response) {
        const { page = 1 } = request.query;

        const Servicos = await connection('Servico')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('Servico').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(Servicos);
    },
    async CriarServico(request, response) {
        const {
            ClienteId, 
            Descricao,
            ValorAdicional, 
            PercentualDesconto,
            ValorDesconto,
            ValorTotal,
            Status
         } = request.body;
 
     const [Id] = await connection('Servico')
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
    async DeletarServico(request, response) {
        const { id } = request.params;
        
        await connection('Servico').where('ServicoId', id).delete();

        return response.status(204).send();
    }
};