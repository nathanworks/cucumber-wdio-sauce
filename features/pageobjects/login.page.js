const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () {
        return $("#user-name");
    }

    get inputPassword () {
        return $("#password");
    }

    get btnSubmit () {
        return $("//input[@id='login-button']");
    }

    get errorMsg () { return $(
      "//h3[text()='Epic sadface: Username and password do not match any user in this service']"
    );}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
