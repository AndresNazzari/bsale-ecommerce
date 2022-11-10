import awilix from 'awilix';
import { db } from './database.config.js';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function depInySetup() {
  container.register({
    //routes

    //controllers

    //services

    // inject knexjs object with database connection pooling
    db: awilix.asValue(db),

    //inject constants
  });
}

export { container, depInySetup };
