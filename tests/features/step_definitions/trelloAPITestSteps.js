import { Given, When, Then } from 'cucumber';
import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';

const trelloAPITest = require('../../pages/trelloAPITestPage.js');
const trelloAPITestPage = new trelloAPITest();

let response

Given(/^I send the request to the demo api1$/, async () => {
    
});

Then(/^I get the 200 status code$/, async (statusCode) => {
    
});