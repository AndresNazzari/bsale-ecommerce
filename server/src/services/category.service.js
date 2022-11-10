export default class CategoryService {
  constructor({ db }) {
    // console.log(db.context.client);
    this.knex = db;
  }

  async getCategories() {
    return await this.knex('category').select('*');
  }
}
