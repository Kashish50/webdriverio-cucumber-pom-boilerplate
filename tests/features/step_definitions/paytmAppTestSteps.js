const { Given, When, Then } = require('cucumber');

const home = require('../../pages/paytmAppHomePage.js');
const homePage = new home();

Given(/^I launch the paytm android mobile app$/, () => {
    homePage.launchApp();
});

Then(/^skip button is displayed$/, () => {
    homePage.isBtnSkipDisplayed();
});