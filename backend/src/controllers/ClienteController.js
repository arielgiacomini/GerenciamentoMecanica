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
            nome, 
            sobrenome, 
            preferenciaNome, 
            email, 
            telefoneCelular, 
            telefoneResidencial, 
            logradouroCEP, 
            logradouro, 
            logradouroNumero, 
            logradouroBairro, 
            logradouroCidade, 
            logradouroUF
         } = request.body;
 
     await connection('cliente')
     .insert({
         nome, 
         sobrenome, 
         preferenciaNome, 
         email, 
         telefoneCelular, 
         telefoneResidencial, 
         logradouroCEP, 
         logradouro, 
         logradouroNumero, 
         logradouroBairro, 
         logradouroCidade, 
         logradouroUF,
     })
 
     return response.json({ preferenciaNome });
    },
    async DeletarCliente(request, response) {
        const { id } = request.params;

     await connection('cliente').where('id', id).delete();
 
     return response.status(204).send();
    } 
};