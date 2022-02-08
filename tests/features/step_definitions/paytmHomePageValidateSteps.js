const { Given, When, Then } = require('cucumber');

const home = require('../../pages/paytmHomePage.js');
const homePage = new home();

const inputData = require('../../files/testData/paytmTestDataOne.js');

import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';
var bFlag;

Given(/^I launch the paytm web application$/, () => {
    homePage.navigateToURL();
});

Then(/^I am successfully able to launch paytm web application$/, () => {
    bFlag = homePage.isHomePageDisplayed();
    bFlag.should.equal(true);
});

Then(/^all the expected options in the header are present$/, () => {
    homePage.validateHeaderOptions();
});

Then(/^I hover over the more in the header options$/, () => {
    homePage.hoverOverMoreOptions();
});

Then(/^all the expected options under more options are present$/, () => {
    homePage.validateMoreOptions();
});

Then(/^prepaid radio button should be selected by default$/, () => {
    homePage.isPrepaidRadioButtonSelected();
});

Then(/^mobile number field accepts max ten char$/, () => {
    homePage.validateMobileNumberMaxLength();
});

When(/^I enter 12 digit number (.*) in mobile number field$/, (mNumber) => {
    homePage.mobileNumber = mNumber;
});

Then(/^I select (.*) as mobile operator$/, (mOperator) => {
    browser.pause(1000);
    homePage.mobileOperator = mOperator;
});

Then(/^I am able to select (.*) as mobile operator successfully$/, (mOperator) => {
    homePage.validateMobileOperator(mOperator);
});

Then(/^the mobile operator circle field should not be visible$/, () => {
    let bFlag = homePage.isinputMobileOperatorCircleDisplayed();
    bFlag.should.equal(false);
});

Then(/^the mobile operator circle field becomes visible$/, () => {
    let bFlag = homePage.isinputMobileOperatorCircleDisplayed();
    bFlag.should.equal(true);
});

Then(/^the button change mobile operator becomes visible$/, () => {
    let bFlag = homePage.isbtnChangeMobileOperatorDisplayed();
    bFlag.should.equal(true);
});

Then(/^the button change mobile operator has the dark sky blue color$/, () => {
    homePage.validateColorButtonChangeMobileOperator();
});

Then(/^I scroll to the book on paytm section$/, () => {
    homePage.scrollToBookOnPaytm();
});

Then(/^the book on paytm section is displayed$/, () => {
    let bFlag = homePage.isLblBookOnPaytmDisplayed();
    bFlag.should.equal(true);
});

Then(/^the (.*) option should be displayed under the book on paytm section$/, (optionName) => {
    homePage.validateBookOnPaytmOption(optionName);
});

Then(/^I select the (.*) from the header options$/, (optionName) => {
    // homePage.validateBookOnPaytmOption(optionName);
});
