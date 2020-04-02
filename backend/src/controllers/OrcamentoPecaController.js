const connection = require('../database/connection');

module.exports = {

    async GetOrcamentoPecaForAll(request, response) {
        const { page = 1 } = request.query;
        
        const orcamentosPecas = await connection('OrcamentoPeca')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('OrcamentoPeca').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(orcamentosPecas);
    },
    async CriarOrcamentoPeca(request, response) {
        const {
            OrcamentoId, 
            PecaId
         } = request.body;
 
     const [Id] = await connection('OrcamentoPeca')
        .insert({
            OrcamentoId, 
            PecaId
     })
 
     return response.json({ Id });
    },
    async DeletarOrcamentoPeca(request, response) {
        const { id } = request.params;
        
        await connection('OrcamentoPeca').where('OrcamentoId', id).delete();

        return response.status(204).send();
    }
};