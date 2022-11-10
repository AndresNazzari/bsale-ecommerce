import awilix from 'awilix';
import { db } from './database.config.js';
import { page, limit, orderBy, order } from '../constants/constants.js';

import CategoryRoute from '../routes/category.route.js';
import CategoryController from '../controllers/category.controller.js';
import CategoryService from '../services/category.service.js';
import ProductRoute from '../routes/product.route.js';
import ProductController from '../controllers/product.controller.js';
import ProductService from '../services/product.service.js';
import DiscountRoute from '../routes/discount.route.js';
import DiscountController from '../controllers/discount.controller.js';
import DiscountService from '../services/discount.service.js';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function depInySetup() {
  container.register({
    //routes
    categoryRoute: awilix.asClass(CategoryRoute),
    productRoute: awilix.asClass(ProductRoute),
    discountRoute: awilix.asClass(DiscountRoute),

    //controllers
    categoryController: awilix.asClass(CategoryController),
    productController: awilix.asClass(ProductController),
    discountController: awilix.asClass(DiscountController),

    //services
    categoryService: awilix.asClass(CategoryService),
    productService: awilix.asClass(ProductService),
    discountService: awilix.asClass(DiscountService),

    // inject knexjs object with database connection pooling
    db: awilix.asValue(db),

    //inject constants
    page: awilix.asValue(page),
    limit: awilix.asValue(limit),
    orderBy: awilix.asValue(orderBy),
    order: awilix.asValue(order),
  });
}

export { container, depInySetup };
