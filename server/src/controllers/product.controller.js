import { validationResult } from 'express-validator';

export default class ProductController {
  constructor({ productService, page, limit, orderBy, order }) {
    this.productService = productService;
    this.page = page;
    this.limit = limit;
    this.orderBy = orderBy;
    this.order = order;

    this.getProducts = this.getProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  async getProducts(req, res) {
    try {
      const { name, page, limit, category, pmin, pmax, discount, orderBy, order } = req.query;

      const products = await this.productService.getProducts(
        name,
        page || this.page,
        limit || this.limit,
        category,
        pmin,
        pmax,
        discount,
        orderBy || this.orderBy,
        order || this.order
      );
      const totalQty = await this.productService.getQty(name, category, pmin, pmax, discount);

      res.status(200).json({ products, ...totalQty });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`Server Error: ${error.message}`);
    }
  }

  async getProduct(req, res) {
    try {
      const { productId } = req.params;
      const product = await this.productService.getProduct(productId);
      res.status(200).json({ product });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`Server Error: ${error.message}`);
    }
  }
}
