
exports.up = function(knex, Promise) {
  return new Promise.all([
    knex.schema.createTable('users_challenges', t => {
      t.string('challenge_id');
      t.string('user_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return new Promise.all([
    knex.schema.dropTable('users_challenges');
  ])
};
