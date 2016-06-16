
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', function(table) {
    table.increments();
    table.text('title');
    table.text('description');
    table.dateTime('start_time');
    table.dateTime('end_time');
    table.integer('location_id').unsigned().references('id').inTable('locations').onDelete('cascade');
    table.boolean('complete').defaultTo(false);
    table.integer('max_users');
    table.integer('challenger_id').unsigned().references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
