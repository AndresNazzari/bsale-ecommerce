import express from 'express';
import { check } from 'express-validator';

export default class DiscountRoute extends express.Router {
  constructor({ discountController }) {
    super();
    this.discountController = discountController;

    //@route    GET api/product
    //@desc     Get all products
    //@access   Private
    this.get('/', this.discountController.getDiscounts);
  }
}
