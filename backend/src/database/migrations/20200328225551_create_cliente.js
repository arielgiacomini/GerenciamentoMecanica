
exports.up = function(knex) {
        knex.schema.hasTable('Cliente').then(function(exists) {
          if (!exists) 
          {
            return knex.schema.createTable('Cliente', function(table) {
            table.increments('Id').primary();
            table.string('Nome', 200).notNullable();
            table.string('Sobrenome', 200).notNullable();
            table.string('PreferenciaNome', 50).notNullable();
            table.string('Email', 100).notNullable();
            table.string('TelefoneCelular', 20).notNullable();
            table.string('TelefoneResidencial', 20);
            table.string('LogradouroCEP', 10);
            table.string('Logradouro', 200);
            table.string('LogradouroNumero', 10).notNullable();
            table.string('LogradouroBairro', 200).notNullable();
            table.string('LogradouroCidade', 200).notNullable();
            table.string('LogradouroUF', 2).notNullable();
      });
    }          
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Cliente')
};
