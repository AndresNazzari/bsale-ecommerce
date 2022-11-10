export default class DiscountService {
  constructor({ db }) {
    this.knex = db;
  }

  async getDiscounts() {
    return await this.knex('product').select('discount').where('discount', '>', 0);
  }
}
