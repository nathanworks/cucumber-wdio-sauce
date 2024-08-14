const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");
const ProductPage = require("../pageobjects/product.page");

Given(/^the user is logged (.*) and (.*) in and on the products page and product has been sorted$/, async(username,password) => {
    await ProductPage.open();
    await LoginPage.login(username, password);
    await LoginPage.clickLogin()
     await browser.waitUntil(
       async () => await ProductPage.productTitle.isDisplayed(),
       {
         timeout: 5000,
       }
     );
});

When(/^the user clicks "Add to Cart" on (.*)$/, async (product) => {
  const product_xpath = await ProductPage.convertProductToXpath(product)
  await ProductPage.addToCartClick(product_xpath);
});

Then(/^the button label should change to "Remove" on (.*)$/, async (product) => {
  const product_xpath = await ProductPage.convertProductToXpath(product);
  await browser.waitUntil(
    async () => await ProductPage.removeButton(product_xpath).isDisplayed(),
    {
      timeout: 5000,
    }
  );
  const removeButtonDisplayed = await ProductPage.removeButton(
    product_xpath
  ).isDisplayed();
  expect(removeButtonDisplayed).toBe(true);
});

Then(/^the cart icon should show "1" item$/, async () => {
    const cartIconDisplayed = await ProductPage.cartIcon.isDisplayed();
    expect(cartIconDisplayed).toBe(true);
});
