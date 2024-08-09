const Page = require('./page');

class CheckoutPage extends Page {
  get firstNameInput() {
    return $("#first-name");
  }
  get lastNameInput() {
    return $("#last-name");
  }
  get postalCodeInput() {
    return $("#postal-code");
  }
  get checkout() {
    return $("#checkout");
  }
  get finishButton() {
    return $("#finish");
  }
  get orderConfirmationMessage() {
    return $(".complete-header");
  }

  get continueButton(){
    return $("#continue");
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
    await this.continueButton.click();
  }

  async clickCheckout() {
    await this.checkout.click();
  }

  async finishPurchase() {
    await this.finishButton.click();
  }

  async getOrderConfirmationMessage() {
    return await this.orderConfirmationMessage.getText();
  }
}

module.exports = new CheckoutPage();