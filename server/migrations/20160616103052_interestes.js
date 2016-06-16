
exports.up = function(knex, Promise) {
  return knex.schema.createTable('interests', function(table) {
    table.increments();
    table.text('name');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('interests');
};
