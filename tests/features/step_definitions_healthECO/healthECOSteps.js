const { Given, When, Then } = require('cucumber');

const signUp = require('../../pagesHealthECO/signUpPage.js');
const signUpPage = new signUp();

Given(/^I launch the healthECO android mobile app$/, () => {
    signUpPage.isAppLaunched();
});

Then(/^I am able to launch app successfully$/,()=> {
    
});