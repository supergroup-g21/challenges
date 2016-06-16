
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.text('name');
    table.text('fb_token');
    table.text('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
