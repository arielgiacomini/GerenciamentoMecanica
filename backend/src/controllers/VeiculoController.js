const connection = require('../database/connection');

module.exports = {

    async GetVeiculoForAll(request, response) {
        const { page = 1} = request.query;

        const veiculos = await connection('Veiculo')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

            const [contagem] = await connection('Veiculo').count();

            response.header('X-Total-Count', contagem['count(*)']);

            return response.json(veiculos);
    },
    async CriarVeiculo(request, response) {
        const {
            Marca,
            Modelo
        } = request.body;

        const [Id] = await connection('Veiculo')
            .insert({
                Marca,
                Modelo
            })
            
            return response.json({ Id })
    },
    async DeletarVeiculo(request, response) {
        const { id } = request.params;

        await connection('Veiculo').where('VeiculoId', id).delete();

        return response.status(204).send();
    }
}