const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("#user-name");
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $("#login-button");
    }

    get errorMsg(){
        return $(
          "//h3[contains(text(), 'Epic sadface: Username and password do not match any user in this service')]"
        )
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async clickLogin()
    {
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
