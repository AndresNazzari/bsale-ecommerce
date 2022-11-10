import express from 'express';
import { check } from 'express-validator';

export default class ProductRoute extends express.Router {
  constructor({ productController }) {
    super();
    this.productController = productController;

    //@route    GET api/product
    //@desc     Get all products
    //@access   Private
    this.get('/', this.productController.getProducts);

    //@route    GET api/product
    //@desc     Get all categories
    //@access   Private
    this.get('/:productId', this.productController.getProduct);
  }
}
