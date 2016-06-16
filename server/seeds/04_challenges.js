exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('challenges').insert({
      id: 1,
      title: 'Magic the Gathering: The Gathering',
      descsription: 'Looking for 3 noble foes to engage in righteous battle until my mom brings home Arby’s for dinner around 5pm',
      start_time: '2016-6-20 17:00:00'
      end_time: '2016-6-20 20:00:00'
      location_id: 1,
      max_users: 3,
      challenger_id: 1
    }),

    knex('challenges').insert({
      id: 2,
      title: 'Pickup basketball for all',
      descsription: 'non-professional basketball enthusiast seeking other amateur hoop lovers for a game of fundamentals heavy ball!',
      start_time: '2016-6-25 15:00:00',
      end_time: '2016-6-25 18:00:00',
      location_id: 2,
      max_users: 9,
      challenger_id: 2
    })
  ])
}
