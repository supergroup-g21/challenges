
exports.up = function(knex, Promise) {
  return new Promise.all([
    knex.schema.createTable('users_interests')
  ])
};

exports.down = function(knex, Promise) {
  return new Promise.all([
    knex.schema.dropTable('users_interests');
  ])
};
