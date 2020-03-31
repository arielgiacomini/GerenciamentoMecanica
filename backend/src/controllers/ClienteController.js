const connection = require('../database/connection');

module.exports = {

    async GetClientesForAll(request, response) {
        const { page = 1} = request.query;

        const clientes = await connection('Cliente')
        .limit(5)
        .offset(( page - 1 ) * 5)
        .select('*');

        const [contagem] = await connection('Cliente').count();

        response.header('X-Total-Count', contagem['count(*)']);

        return response.json(clientes);
    },
    async CriarCliente(request, response) {
        const {
            NomeCliente,
            Apelido,
            DocumentoCliente,
            Sexo,
            EstadoCivil,
            DataNascimento,
            Email,
            TelefoneFixo,
            TelefoneCelular,
            TelefoneOutros,
            LogradouroCEP,
            LogradouroNome,
            LogradouroNumero,
            LogradouroComplemento,
            LogradouroMunicipio,
            LogradouroBairro,
            LogradouroUF,
            RecebeNotificacoes,
            ClienteAtivo,
            DataCadastro
         } = request.body;
 
     await connection('Cliente')
     .insert({
        NomeCliente,
        Apelido,
        DocumentoCliente,
        Sexo,
        EstadoCivil,
        DataNascimento,
        Email,
        TelefoneFixo,
        TelefoneCelular,
        TelefoneOutros,
        LogradouroCEP,
        LogradouroNome,
        LogradouroNumero,
        LogradouroComplemento,
        LogradouroMunicipio,
        LogradouroBairro,
        LogradouroUF,
        RecebeNotificacoes,
        ClienteAtivo,
        DataCadastro
     })
 
     return response.json({ preferenciaNome });
    },
    async DeletarCliente(request, response) {
        const { id } = request.params;

     await connection('Cliente').where('ClienteId', id).delete();
 
     return response.status(204).send();
    } 
};