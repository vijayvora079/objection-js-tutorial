// Update with your config settings.

const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      port : '3306',
      database: 'testdb2',
      user: 'root',
      password: 'admin',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    // automatically convert camelCase to snake case
    // so table names are in snake case
    // but we can use camelCase fields per default
    ...knexSnakeCaseMappers(),
  },
};
