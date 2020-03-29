
exports.up = function(knex) {
    knex.schema.hasTable('Colaborador').then(function(exists) 
    {
        if (!exists) 
        {
          return knex.schema.createTable('Colaborador', function(table) 
            {
                table.increments('Id').primary(); //AutoIncremental
                table.string('Usuario', 20).notNullable();
                table.string('Nome', 200).notNullable();
                table.string('NomeCompleto', 250).notNullable();
                table.string('NomePreferencial', 50).notNullable();
                table.string('CPF', 15);
                table.datetime('DataNascimento');
                table.string('EmailPessoal', 150);
                table.string('EmailProfissional', 150);
                table.datetime('DataAdmissao').notNullable();
                table.datetime('DataDemissao');
                table.integer('Ativo');
            });
        }          
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Colaborador')
};
