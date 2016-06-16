// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/snc',
    migrations: './migrations',
    seeds: './seeds'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: './migrations',
    seeds: './seeds'
  }

};
