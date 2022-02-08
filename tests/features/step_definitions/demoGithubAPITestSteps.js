import { Given, When, Then } from 'cucumber';

const demoGithubAPITestPage = require('../../pages/demoGithubAPITestPage.js');
const githubAPITestPage = new demoGithubAPITestPage();

const apiCommonUtils = require('../../pages/APICommonUtilsPage.js');
const apiCommonUtilsPage = new apiCommonUtils();

import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';

var response;
var options;
var actualStatusCode;
var bFlag;

Given(/^I pick up the baseRequestOne$/, async () => {
    options = await githubAPITestPage.readBaseRequestOne();
});

Then(/^I send the request to github API1$/, async () => {
    await apiCommonUtilsPage.setResponse(options);
    response = await apiCommonUtilsPage.getResponse();
   // console.log(response);
});

Then(/^I should get the (.*) status code$/, async (expectedStatusCode) => {
    response = await apiCommonUtilsPage.getResponse();
    actualStatusCode = await apiCommonUtilsPage.getResponseStatusCode(response);
    console.log("**** Actual Status Code is "+actualStatusCode);
    actualStatusCode = ""+actualStatusCode+"";
    actualStatusCode.should.equal(expectedStatusCode);
});

Then(/^the response should contain a record with expected (.*)$/, async (key) => {
    bFlag = await apiCommonUtilsPage.validateResponseAPI1(response, key);
    bFlag.should.equal(true);
});

Given(/^I pick up the baseRequestTwo$/, async () => {
    options = await githubAPITestPage.readBaseRequestTwo();
});

Then(/^I send the request to github API2$/, async () => {
    await apiCommonUtilsPage.setResponse(options);
});

Then(/^the response of API2 should contain key (.*) with expected value$/, async (key) => {
    console.log(response.body.name);

    bFlag = await apiCommonUtilsPage.validateResponseAPI2(response, key);
    bFlag.should.equal(true);
});

// Then(/^I should get the (.*) status code$/, async (expectedStatusCode) => {
//     response = await apiCommonUtilsPage.getResponse();
//     actualStatusCode = await apiCommonUtilsPage.getResponseStatusCode(response);
//     actualStatusCode.should.equal.expectedStatusCode;
// });
