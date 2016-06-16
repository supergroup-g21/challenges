exports.seed = function(knex, Promise) {
  
  return knex.('user_challenge').del().then(function() {
    return Promise.all([
      knex('user_challenge').insert({
        id: 1,
        user_id: 1,
        challenge_id: 1
      }),

      knex('user_challenge').insert({
        id: 2,
        user_id: 2,
        challenge_id: 2
      }),
    ]);
  })
};
