const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pageobjects/login.page");
const ProductPage = require("../pageobjects/product.page");
const CheckoutPage = require("../pageobjects/checkout.page");

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I am on the product page$/, async () => {
  await browser.waitUntil(async () => await ProductPage.appLogo.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: "Expected to be on the product page",
  });
  const appLogoDisplayed = await ProductPage.appLogo.isDisplayed();
  expect(appLogoDisplayed).toBe(true);
});

When(/^I sort products by "(.*)"$/, async (sortOption) => {
  await ProductPage.sortBy(sortOption);
});

When(/^I add a product to the cart$/, async () => {
  await ProductPage.addProductToCart()
});

When(/^I go to the cart$/, async () => {
  await ProductPage.goToCart();
});

When(/^I proceed to checkout$/, async () => {
  await CheckoutPage.clickCheckout();
});

When(
  /^I fill in the checkout details (.*) (.*) (.*)$/,
  async (name, lastName, postal) => {
    await CheckoutPage.fillCheckoutDetails(name, lastName, postal);
  }
);

When(/^I complete the purchase$/, async () => {
  await CheckoutPage.finishPurchase();
});

Then(/^I should see the order confirmation$/, async () => {
  const confirmationMessage = await CheckoutPage.getOrderConfirmationMessage();
  expect(confirmationMessage).toContain("Thank you for your order!");
});
