export default class DiscountController {
  constructor({ discountService }) {
    this.discountService = discountService;

    this.getDiscounts = this.getDiscounts.bind(this);
  }

  async getDiscounts(req, res) {
    try {
      const data = await this.discountService.getDiscounts();
      const discounts = data.map((item) => item.discount);
      const uniqueDiscounts = [...new Set(discounts)];
      res.status(200).json({ discounts: uniqueDiscounts });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`Server Error: ${error.message}`);
    }
  }
}
