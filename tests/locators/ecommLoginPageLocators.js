class LoginPageLocators {
    constructor() {
     
      this.txtEmail = '//input[@id="email"]';
      this.txtPassword = '//input[@id="passwd"]';
      this.btnSignIn = '//button[@id="SubmitLogin"]';
      this.lblAuthentication = '//h1[text()="Authentication"]';
      this.lblInvalidPasswordError = '//div[@class="alert alert-danger"]//ol//li';
    
    }
  }
  
  module.exports = LoginPageLocators;