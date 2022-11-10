import express from 'express';

export default class CategoryRoute extends express.Router {
  constructor({ categoryController }) {
    super();
    this.categoryController = categoryController;

    //@route    GET api/category
    //@desc     Get all categories
    //@access   Private
    this.get('/', this.categoryController.getCategories);
  }
}
