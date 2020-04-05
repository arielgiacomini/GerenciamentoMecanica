const connection = require('../database/connection');

module.exports = {

    async GetServicoMaodeObraForAll(request, response) {
        const { page = 1 } = request.query;
        
        const Servicos = await connection('ServicoMaodeObra')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('ServicoMaodeObra').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(Servicos);
    },
    async CriarServicoMaodeObra(request, response) {
        const {
            ServicoId, 
            MaodeObraId
         } = request.body;
 
     const [Id] = await connection('ServicoMaodeObra')
        .insert({
            ServicoId, 
            MaodeObraId
     })
 
     return response.json({ Id });
    },
    async DeletarServicoMaodeObra(request, response) {
        const { id } = request.params;
        
        await connection('ServicoMaodeObra').where('ServicoId', id).delete();

        return response.status(204).send();
    }
};