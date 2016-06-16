
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function(table) {
    table.increments();
    table.float('lat');
    table.float('long');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};
