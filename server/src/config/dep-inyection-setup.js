import awilix from 'awilix';
import { db } from './database.config.js';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

import CategoryRoute from '../routes/category.route.js';
import CategoryController from '../controllers/category.controller.js';
import CategoryService from '../services/category.service.js';
import DiscountRoute from '../routes/discount.route.js';
import DiscountController from '../controllers/discount.controller.js';
import DiscountService from '../services/discount.service.js';

function depInySetup() {
  container.register({
    //routes
    categoryRoute: awilix.asClass(CategoryRoute),
    discountRoute: awilix.asClass(DiscountRoute),

    //controllers
    categoryController: awilix.asClass(CategoryController),
    discountController: awilix.asClass(DiscountController),

    //services
    categoryService: awilix.asClass(CategoryService),
    discountService: awilix.asClass(DiscountService),

    // inject knexjs object with database connection pooling
    db: awilix.asValue(db),

    //inject constants
  });
}

export { container, depInySetup };
