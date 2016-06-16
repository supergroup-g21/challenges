
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments();
    table.text('comment');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.integer('challenge_id').unsigned().references('id').inTable('challenges').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
