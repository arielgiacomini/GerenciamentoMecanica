const connection = require('../database/connection');

module.exports = {

    async GetClienteVeiculoForAll(request, response) {
        const { page = 1} = request.query;

        const clienteSeusVeiculos = await connection('ClienteVeiculo')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

            const [contagem] = await connection('ClienteVeiculo').count();

            response.header('X-Total-Count', contagem['count(*)']);

            return response.json(clienteSeusVeiculos);
    },
    async CriarClienteVeiculo(request, response) {
        const {
            ClienteId,
            VeiculoId,
            AnoVeiculo,
            PlacaVeiculo,
            CorVeiculo,
            KmRodados
         } = request.body;
 
     await connection('ClienteVeiculo')
     .insert({
            ClienteId,
            VeiculoId,
            AnoVeiculo,
            PlacaVeiculo,
            CorVeiculo,
            KmRodados
     })
 
     return response.json({ ClienteId, VeiculoId });
    },
    async DeletarClienteVeiculo(request, response) {
        const { id } = request.params;

        await connection('ClienteVeiculo').where('ClienteVeiculoId', id).delete();
 
        return response.status(204).send();
    } 
}