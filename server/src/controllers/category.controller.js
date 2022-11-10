export default class CategoryController {
  constructor({ categoryService }) {
    this.categoryService = categoryService;

    this.getCategories = this.getCategories.bind(this);
  }

  async getCategories(req, res) {
    try {
      const categories = await this.categoryService.getCategories();
      res.status(200).json({ categories });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
}
