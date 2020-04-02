const connection = require('../database/connection');

module.exports = {

    async GetMaodeObraForAll(request, response) {
        const { page = 1 } = request.query;

        const MaodeObras = await connection('MaodeObra')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('MaodeObra').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(MaodeObras);
    },
    async CriarMaodeObra(request, response) {
        const {
            MaodeObra, 
            Tipo,
            Valor, 
            VigenciaInicial,
            VigenciaFinal
         } = request.body;
 
     const [Id] = await connection('MaodeObra')
        .insert({
            MaodeObra, 
            Tipo,
            Valor, 
            VigenciaInicial,
            VigenciaFinal
     })
 
     return response.json({ Id });
    },
    async DeletarMaodeObra(request, response) {
        const { id } = request.params;
        
        await connection('MaodeObra').where('MaodeObraId', id).delete();

        return response.status(204).send();
    }
};