const Page = require("./page");

class ProductPage extends Page {
  get sortDropdown() {
    return $(".product_sort_container");
  }
  get sortOptions() {
    return this.sortDropdown.$$("option");
  } 

  get shoppingCartLink() {
    return $(".shopping_cart_link");
  }
  get appLogo() {
    return $(".app_logo");
  }
  get addToCart()
  {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  async open() {
    await browser.url("/inventory.html");
  }

  async sortBy(option) {
    await this.sortDropdown.click();
    await browser.waitUntil(
      async () => (await this.sortOptions.length) > 0,
      {
        timeout: 3000,
        timeoutMsg: "Sort options did not appear",
      }
    );
    await this.selectSortOption(option);
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

  async addProductToCart() {
    await this.addToCart.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = new ProductPage();
