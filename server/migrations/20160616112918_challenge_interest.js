
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge_interest', function(table) {
    table.increments();
    table.integer('challenge_id').unsigned().references('id').inTable('challenges').onDelete('cascade');
    table.integer('interest_id').unsigned().references('id').inTable('interests').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenge_interest');
};
