const connection = require('../database/connection');

module.exports = {

    async SessaoLogar(request, response) {
        const { preferenciaNome } = request.body;

        const loginCliente = await connection('Colaborador')
        .where('NomePreferencial', preferenciaNome)
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
            usuario, 
            nome,
            nomeCompleto, 
            nomePreferencial,
            cpf,
            dataNascimento,
            emailPessoal,
            emailProfissional,
            dataAdmissao,
            dataDemissao,
            ativo
         } = request.body;
 
     const [Id] = await connection('Colaborador')
     .insert({
        usuario, 
        nome,
        nomeCompleto, 
        nomePreferencial,
        cpf,
        dataNascimento,
        emailPessoal,
        emailProfissional,
        dataAdmissao,
        dataDemissao,
        ativo
     })
 
     return response.json({ Id });
    },
    async DeletarColaborador(request, response) {
        const { id } = request.params;
        
        await connection('Colaborador').where('Id', id).delete();

        return response.status(204).send();
    }   
}