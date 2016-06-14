
exports.up = function(knex, Promise) {
  return new Promise.all([
    knex.schema.createTable('challenges', t => {
      t.increments('id').primary();
      t.string('name');
      t.date('start_time');
      t.string('description');
      t.string('location');
      t.string('user_id');
      t.string('interest_id');
      t.string('complete');
      t.string('full');
    })
  ])
};

exports.down = function(knex, Promise) {
  return new Promise.all([
    knex.schema.dropTable('challenges')
  ])
};
