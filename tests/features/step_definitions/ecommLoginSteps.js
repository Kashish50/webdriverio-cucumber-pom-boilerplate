const { Given, When, Then } = require('cucumber');

const home = require('../../pages/ecommHomePage.js');
const login = require('../../pages/ecommLoginPage.js');

const homePage = new home();
const loginPage = new login();

Given(/^user launches the expected url of ecommerce web application$/, () => {
    homePage.navigateToURL()
});

Then(/^user is able to open my ecommerce web application successfully$/, () => {
    homePage.validateSignInButtonDisplay()
});

When(/^user clicks on the signin button$/, () => {
    homePage.clickSignInButton()
});

Then(/^user is displayed login screen$/, () => {
    loginPage.validateLoginPage()
});

When(/^user enters value in the email address field (.*)$/, (email) => {
    loginPage.inputEmail(email)
    
});

Then(/^user enters value in the password field (.*)$/, (password) => {
    loginPage.inputPassword(password)
    loginPage.clickSignInButton()
});

Then(/^user clicks on the sign in button$/, () => {
    loginPage.clickSignInButton()
   
});

Then(/^user gets login failed error message$/, () => {
    loginPage.validateInvalidPasswordError()
   
});

Then(/^the email address field changes to red colour and invalid email validation occurs$/, () => {
    loginPage.validateInvalidEmailValidation()
   
});

