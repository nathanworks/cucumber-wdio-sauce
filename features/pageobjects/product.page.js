const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProductPage extends Page {
  get productTitle() {
    return $("//span[contains(text(),'Products')]");
  }

  get productList() {
    return $(".inventory_item");
  }

  get addToCart() {
    return (product) => $(`#add-to-cart-${product}`);
  }

  get removeButton() {
    return (product) => $(`#remove-${product}`);
  }

  get cartIcon() {
    return $("//span[@class='shopping_cart_badge' and text()='1']");
  }

  get sortDropdown() {
    return $(".product_sort_container");
  }

  get sortOptions() {
    return this.sortDropdown.$$("option");
  }

  async selectSortOption(option) {
    const sortOption = this.sortOptions.find(async (el) => {
      const text = await el.getText();
      return text === option;
    });
    if (sortOption) {
      await sortOption.click();
    } else {
      throw new Error(`Sort option ${option} not found`);
    }
  }

  async sortBy(option) {
    await this.sortDropdown.click();
    await browser.waitUntil(async () => (await this.sortOptions.length) > 0, {
      timeout: 5000,
    });
    await this.selectSortOption(option);
  }

  async convertProductToXpath(product) {
    return product
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  }

  async addToCartClick(product) {
    const addToCartButton = this.addToCart(product);
    await addToCartButton.click();
  }

   async getProductPrices() {
    const items = await $$(".inventory_item");
    const prices = [];
    
    for (let item of items) {
      const priceText = await item.$(".inventory_item_price").getText();
      const price = parseFloat(priceText.replace('$', '').trim());
      prices.push(price);
    }
    
    return prices;
   }

  async open() {
    return super.open("inventory.html");
  }
}

module.exports = new ProductPage();
