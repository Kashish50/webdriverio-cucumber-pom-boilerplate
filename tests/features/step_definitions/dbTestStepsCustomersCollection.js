import { Given, When, Then } from 'cucumber';
const dbUtils = require('../../../util/dbUtils.js');
const dbUtilsPage = new dbUtils();
import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';

var chai = require('chai');
var chaiJsonEqual = require('chai-json-equal');
chai.use(chaiJsonEqual);


const testData = require('../../files/testData/dbTestData.js');

var db, dbData;


Then(/^I print yml data$/, () => {
    dbUtilsPage.getCustomersCollectionKeys();
    console.log("Testing")
});


