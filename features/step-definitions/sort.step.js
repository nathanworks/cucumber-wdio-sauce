const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pageobjects/login.page");
const ProductPage = require("../pageobjects/product.page");
const CheckoutPage = require("../pageobjects/checkout.page");


Given(
  /^the user is logged (.*) and (.*) in and on the products page$/,
  async(username,password) => { 
    await ProductPage.open();
    await LoginPage.login(username, password);
    await LoginPage.clickLogin();
    await browser.waitUntil(
      async () => await ProductPage.productTitle.isDisplayed(),
      {
        timeout: 5000,
      }
    );
  }
);

When(/^the user click sort option and choose (.*)$/, async(sortOption) => {
  await ProductPage.sortBy(sortOption);
});

Then(/^the user should see sorted order$/, async() => {

  const prices = await ProductPage.getProductPrices();
  await browser.pause(1000);
  console.log(prices)

  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1], `Produk pada indeks ${i} tidak lebih murah dari produk pada indeks ${i + 1}`);
  }
});
