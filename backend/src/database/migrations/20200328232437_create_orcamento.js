
exports.up = function(knex) {
    knex.schema.hasTable('Orcamento').then(function(exists) {
        if (!exists) 
        {
          return knex.schema.createTable('Orcamento', function(table) {
          
          table.increments('Id').primary(); //AutoIncremental
          
          table.integer('ClienteId').notNullable(); //Campo FK

          table.string('Descricao').notNullable();
          table.string('Observacoes');
          table.decimal('ValorOrcamento').notNullable();
          
          table.foreign('ClienteId').references('Id').inTable('Cliente'); //Tranformando em FK
    });
  }          
});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Orcamento')
};
