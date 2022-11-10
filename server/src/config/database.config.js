import knex from 'knex';
import { config } from './config.js';

export const db = knex({
  client: 'mysql',
  connection: {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  },
});
