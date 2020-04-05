const connection = require('../database/connection');

module.exports = {

    async GetPecaForAll(request, response) {
        const { page = 1 } = request.query;

        const Pecas = await connection('Peca')
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select('*');

        const [contagem] = await connection('Peca').count();

        response.header('X-Total-Count', contagem['count(*)']);
        
        return response.json(Pecas);
    },
    async CriarPeca(request, response) {
        const {
            Peca, 
            Fornecedor,
            Valor,
            ValorFrete
         } = request.body;
 
     const [Id] = await connection('Peca')
        .insert({
            Peca, 
            Fornecedor,
            Valor,
            ValorFrete
     })
 
     return response.json({ Id });
    },
    async DeletarPeca(request, response) {
        const { id } = request.params;
        
        await connection('Peca').where('PecaId', id).delete();

        return response.status(204).send();
    }
};