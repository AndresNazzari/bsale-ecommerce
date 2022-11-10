export default class ProductService {
  constructor({ db }) {
    this.knex = db;
  }

  async getProducts(name, page, limit, category, pmin, pmax, discount, orderBy, order) {
    return await this.knex('product')
      .select('*')
      .where((builder) => {
        if (name) {
          builder.where('name', 'like', `%${name}%`);
        }
        if (category) {
          builder.where('category', category);
        }
        if (pmin) {
          builder.where('price', '>=', pmin);
        }
        if (pmax) {
          builder.where('price', '<=', pmax);
        }
        if (discount) {
          builder.where('discount', '>=', discount);
        }
      })
      .orderBy(orderBy, order)
      .limit(limit)
      .offset(page * limit);
  }

  async getQtyProducts() {
    return await this.knex('product').select('*');
  }

  async getQty(name, category, pmin, pmax, discount) {
    return await this.knex('product')
      .where((builder) => {
        if (name) {
          builder.where('name', 'like', `%${name}%`);
        }
        if (category) {
          builder.where('category', category);
        }
        if (pmin) {
          builder.where('price', '>=', pmin);
        }
        if (pmax) {
          builder.where('price', '<=', pmax);
        }
        if (discount) {
          builder.where('discount', '>=', discount);
        }
      })
      .count('id as totalQty')
      .first();
  }

  async getProduct(id) {
    return await this.knex('product').select('*').where('id', id);
  }
}
