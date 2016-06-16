
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_interest', function(table) {
    table.increments();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.integer('interest_id').unsigned().references('id').inTable('interests').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_interest');
};
