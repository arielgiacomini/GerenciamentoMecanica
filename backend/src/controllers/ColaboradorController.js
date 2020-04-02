const connection = require('../database/connection');

module.exports = {

    async SessaoLogar(request, response) {
        const { preferenciaNome } = request.body;

        const loginCliente = await connection('Colaborador')
        .where('Apelido', preferenciaNome)
        .select('Nome')
        .first();

        if (!loginCliente)
        {
            return response.status(400).json({ error: "Este usuário não existe em nossa base de dados." })
        }

        return response.json(loginCliente);
    },
    async GetColaboradorForAll(request, response) {

        const colaboradores = await connection('Colaborador').select('*');

        return response.json(colaboradores);
    },
    async CriarColaborador(request, response) {
        const {
            Usuario, 
            Senha,
            Nome, 
            NomeCompleto,
            Apelido,
            CPF,
            RG,
            DataAdmissao
         } = request.body;
 
     const [Id] = await connection('Colaborador')
     .insert({
        Usuario, 
        Senha,
        Nome, 
        NomeCompleto,
        Apelido,
        CPF,
        RG,
        DataAdmissao
     })
 
     return response.json({ Id });
    },
    async DeletarColaborador(request, response) {
        const { id } = request.params;
        
        await connection('Colaborador').where('ColaboradorId', id).delete();

        return response.status(204).send();
    }   
}