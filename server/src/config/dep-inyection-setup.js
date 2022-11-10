import awilix from 'awilix';
import { db } from './database.config.js';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

import CategoryRoute from '../routes/category.route.js';
import CategoryController from '../controllers/category.controller.js';
import CategoryService from '../services/category.service.js';

function depInySetup() {
  container.register({
    //routes
    categoryRoute: awilix.asClass(CategoryRoute),
    //controllers
    categoryController: awilix.asClass(CategoryController),

    //services
    categoryService: awilix.asClass(CategoryService),

    // inject knexjs object with database connection pooling
    db: awilix.asValue(db),

    //inject constants
  });
}

export { container, depInySetup };
