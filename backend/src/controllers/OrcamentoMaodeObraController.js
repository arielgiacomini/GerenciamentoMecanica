const connection = require('../database/connection');

module.exports = {

    async GetOrcamentoMaodeObraForAll(request, response) {
        const { page = 1 } = request.query;
        
        const orcamentos = await connection('OrcamentoMaodeObra')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('OrcamentoMaodeObra').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(orcamentos);
    },
    async CriarOrcamentoMaodeObra(request, response) {
        const {
            OrcamentoId, 
            MaoDeObraId
         } = request.body;
 
     const [Id] = await connection('OrcamentoMaodeObra')
        .insert({
            OrcamentoId, 
            MaoDeObraId
     })
 
     return response.json({ Id });
    },
    async DeletarOrcamentoMaodeObra(request, response) {
        const { id } = request.params;
        
        await connection('OrcamentoMaodeObra').where('OrcamentoId', id).delete();

        return response.status(204).send();
    }
};