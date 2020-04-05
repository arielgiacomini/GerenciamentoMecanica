const connection = require('../database/connection');

module.exports = {

    async GetServicoPecaForAll(request, response) {
        const { page = 1 } = request.query;
        
        const ServicosPecas = await connection('ServicoPeca')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('ServicoPeca').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(ServicosPecas);
    },
    async CriarServicoPeca(request, response) {
        const {
            ServicoId, 
            PecaId
         } = request.body;
 
     const [Id] = await connection('ServicoPeca')
        .insert({
            ServicoId, 
            PecaId
     })
 
     return response.json({ Id });
    },
    async DeletarServicoPeca(request, response) {
        const { id } = request.params;
        
        await connection('ServicoPeca').where('ServicoId', id).delete();

        return response.status(204).send();
    }
};