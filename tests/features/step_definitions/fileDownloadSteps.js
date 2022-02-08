const { Given, When, Then } = require('cucumber');

const fileDownloadPage = require('../../pages/fileDownloadPage.js');
const fileDownloading = new fileDownloadPage();

Given(/^I am on the file download page$/, () => {
    fileDownloading.navigateToURL()
});

Then(/^the generate file button should be displayed$/, () => {
    fileDownloading.validateGenerateFileButtonDisplayed()
});

Then(/^the generate file button should be disabled by default$/, () => {
    fileDownloading.validateGenerateFileButtonDisabled()
});

When(/^I enter some data in the textbox$/, () => {
    fileDownloading.enterDataInTextBox()
});

Then(/^the generate file button should get enabled$/, () => {
    fileDownloading.validateGenerateFileButtonEnabled()
});

When(/^I click on the generate file button$/, () => {
    fileDownloading.clickGenerateFileButton()
});

Then(/^the download link appears in the window$/, () => {
    fileDownloading.validateDownloadLinkDisplayed()
});

When(/^I click on the download link$/, () => {
     fileDownloading.clickDownloadLink()
});

Then(/^the file is downloaded successfully$/, () => {
    fileDownloading.validateFileIsDownloaded()
});