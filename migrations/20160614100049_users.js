
exports.up = function(knex, Promise) {
  return new Promise.all([
    knex.schema.createTable('users', t => {
      t.increments('user_id').primary();
      t.string('username');
      t.string('password_hash');
    })
  ])
};

exports.down = function(knex, Promise) {
  return new Promise.all([
    knex.schema.dropTable('users');
  ])
};
