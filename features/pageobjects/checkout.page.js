const { $ } = require("@wdio/globals");
const Page = require("./page");

class CheckoutPage extends Page {
  get checkout() {
    return $("#checkout");
  }

  get yourinformation() {
    return $("//span[contains(text(),'Checkout: Your Information')]");
  }

  get overview() {
    return $("//span[contains(text(),'Checkout: Overview')]");
  }

  get complete() {
    return $("//span[contains(text(),'Checkout: Complete!')]");
  }

  get firstNameInput() {
    return $("#first-name");
  }
  get lastNameInput() {
    return $("#last-name");
  }
  get postalCodeInput() {
    return $("#postal-code");
  }
  get continueButton() {
    return $("#continue");
  }

  get paymentInfo() {
    return $(
      "//div[@class='summary_info_label' and text()='Payment Information:']"
    );
  }
  get shipInfo() {
    return $(
      "//div[@class='summary_info_label' and text()='Shipping Information:']"
    );
  }

  get priceInfo() {
    return $("//div[@class='summary_info_label' and text()='Price Total']");
  }

  get finishButton() {
    return $("#finish");
  }

  get completeh2() {
    return $(
      "//h2[@class='complete-header' and text()='Thank you for your order!']"
    );
  }

  get cartBadge() {
    return $(".shopping_cart_link");
  }

  get backHome() {
    return $(
      "//button[@class='btn btn_primary btn_small' and text()='Back Home']"
    );
  }

  async cartBadgeClick() {
    await this.cartBadge.click();
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }

  async ContinueClick() {
    await this.continueButton.click();
  }

  async FinishClick() {
    await this.finishButton.click();
  }

  async CheckoutClick() {
    await this.checkout.click();
  }

  open() {
    return super.open("cart.html");
  }
}

module.exports = new CheckoutPage()