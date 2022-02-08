const { Given, When, Then } = require('cucumber');

const inputFormPage = require('../../pages/inputForm.page.js');
const inputPage = new inputFormPage();

Given(/^I launch the expected url$/, () => {
    inputPage.navigateToURL()
});

Then(/^I am successfully navigated to the input form page$/, () => {
    inputPage.validateTheInputFormPage()
});

Then(/^I input the values in the text fields$/, () => {
    inputPage.inputTextFields()
});

Then(/^the default value of select state dropdown should be \"([^\"]*)\"$/, (a) => {
    inputPage.validateSelectStateDropdownValue(a)
});

Then(/^the state dropdown field should have all the expected values$/, () => {
    inputPage.validateSelectStateDropdownValues()
});

Then(/^all the expected fields should be displayed in the form$/, () => {
    inputPage.validateFieldsInForm()
});

Then(/^I perform random operation$/, () => {
    inputPage.validateRandomFunctions()
});