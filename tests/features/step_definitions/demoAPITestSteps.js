import { Given, When, Then } from 'cucumber';

const a = require('../../pages/demoAPITestPage.js');
const b = new a();

import DemoAPITestPage from '../../pages/demoAPITestPage.js';
import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';

var response;

Given(/^I send the request to the demo api1$/, async () => {
    response = await b.makeGetRequestDemoAPI1();
});

Then(/^demo api1 should return the (.*) status code$/, async (statusCode) => {
    await b.validateStatusDemoAPI1(statusCode, response);
});

Then(/^the response body should contain the user with id (.*)$/, async (id) => {
    await b.validateUserIDDemoAPI1(id, response);
});

Then(/^the response body should contain all the expected keys (.*)$/, async (keys) => {
    await b.validateKeysDemoAPI1(keys, response);
});

// Then(/^the (.*) in response body should contain all the expected nested keys (.*)$/, async (key, nestedKeys) => {
//     await b.validateNestedKeysDemoAPI1(key, nestedKeys);
// });

Given(/^I send the request to the demo api2$/, async () => {
    response = await b.makeDeleteRequestDemoAPI2();
});

Then(/^demo api2 should return the (.*) status code$/, async (statusCode) => {
    await b.validateStatusDemoAPI2(statusCode, response);
});

Given(/^I send the request to the demo api3$/, async () => {
    response = await b.makePostRequestDemoAPI3();
});

Then(/^demo api3 should return the (.*) status code$/, async (statusCode) => {
    await b.validateStatusDemoAPI3(statusCode, response);
});

Then(/^demo api3 should return the id with 3 digits in the response body$/, async () => {
    await b.validateNameDemoAPI3(response);
});

Given(/^I send the request to the demo api4$/, async () => {
    response = await b.makeGetRequestDemoAPI4();
});

Then(/^(.*) should contain nested keys (.*)$/, async (key, nestedKeys) => {
    await b.validateNestedKeysDemoAPI1(response, key, nestedKeys);
});

Then(/^I Validate the json schema for demo api4$/, async (response) => {
    await b.validateSchemaDemoAPI4(response);
});

Given(/^I send the request to the demo api5$/, async () => {
    response = await b.makeGetRequestDemoAPI5();
});

Then(/^I print id of first record$/, async () => {
    await b.printIDFirstRecord(response);
});