const connection = require('../database/connection');

module.exports = {

    async SessionLogar(request, response) {
        const { preferenciaNome } = request.body;

        const loginCliente = await connection('Cliente')
        .where('PreferenciaNome', preferenciaNome)
        .select('Nome')
        .first();

        if (!loginCliente)
        {
            return response.status(400).json({ error: "Este usuário não existe em nossa base de dados." })
        }

        return response.json(loginCliente);
    }
}