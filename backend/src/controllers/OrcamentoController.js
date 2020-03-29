const connection = require('../database/connection');

module.exports = {

    async GetOrcamentoForAll(request, response) {

        const orcamentos = await connection('Orcamento').select('*');

        return response.json(orcamentos);
    },
    async CriarOrcamento(request, response) {
        const {
            clienteId, 
            descricao,
            observacoes, 
            valorOrcamento
         } = request.body;
 
     const [Id] = await connection('Orcamento')
     .insert({
        clienteId, 
        descricao, 
        observacoes, 
        valorOrcamento
     })
 
     return response.json({ Id });
    },
    async DeletarOrcamento(request, response) {
        const { id } = request.params;
        
        await connection('Orcamento').where('id', id).delete();

        return response.status(204).send();
    }
};