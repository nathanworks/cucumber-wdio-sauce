const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');
// const { getCredentials } = require("../pageobjects/db.page");

Given(/^the user is on login page$/, async () => {
  await LoginPage.open()
});

When(
  /^the user input (.*) and (.*)$/,
  async (username, password) => {
    await LoginPage.login(username, password);
  }
);


// When(/^the user input valid credential$/, async() => {
//   const credential = await getCredentials(1);
//   await LoginPage.login(credential.username, credential.password);
// });


When(/^the user click Login button$/, async() => {
  await LoginPage.clickLogin()
});


// Then(/^the user should be redirect to product page$/, async() => {
//   const productcTitleDisplayed = await ProductPage.productTitle.isDisplayed();
//   expect(productcTitleDisplayed).toBe(true);
// });


Then(
  /^credential is: (.*). user should be redirect to product page$/,
  async (is_valid) => {
    if (is_valid === "valid") {
      await browser.waitUntil(
        async () => await ProductPage.productTitle.isDisplayed(),
        {
          timeout: 5000,
        }
      );
      const productcTitleDisplayed = await ProductPage.productTitle.isDisplayed();
      expect(productcTitleDisplayed).toBe(true);
    } else if (is_valid === "invalid") {
        throw new Error("Expected");
    }else
    {
      
    }
  }
);


Then(
  /^credential is: (.*) . user should see error message: (.*)$/,
  async (is_valid, msg) => {
    if (is_valid === "invalid") {
      await browser.waitUntil(
        async () => await LoginPage.errorMsg.isDisplayed(),
        {
          timeout: 5000,
        }
      );
      const errorMsgDisplayed = await LoginPage.errorMsg.isDisplayed();
      expect(errorMsgDisplayed).toBe(true);

      const errorMsgText = await LoginPage.errorMsg.getText();
      expect(errorMsgText).toBe(msg);
    } else if (is_valid === "valid") {
        throw new Error("Expected");
    }
  }
);



Then(
  /^credential is: (.*) . user should see list of products$/,
  async (is_valid) => {
    if (is_valid === "valid") {
      await browser.waitUntil(
        async () => (await ProductPage.productList).isDisplayed(),
        {
          timeout: 5000,
        }
      );
      const productListDisplayed = await ProductPage.productList.isDisplayed();
      expect(productListDisplayed).toBe(true);
    } else if (is_valid === "invalid") {
        throw new Error("Expected");
    }
  }
);


