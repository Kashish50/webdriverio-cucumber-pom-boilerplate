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

Given(/^I make a connection request to (.*) database on local host url (.*)$/, async (dbName, url) => {
    db = await dbUtilsPage.getDBconnection(dbName, url);
});

Then(/^I am able to connect to database successfully$/, async () => {
    var flag = false;
    if (db !== null) {
        flag = true;
    }
    flag.should.equal(true);
});

Then(/^I select all the records from (.*) collection$/, async (collectionName) => {
    await dbUtilsPage.selectAllRecords(db, collectionName);
});

Then(/^I select the records from (.*) collection whose (.*) is (.*)$/, async (collectionName, key, value) => {
    dbData = await dbUtilsPage.selectRecord(db, collectionName, key, value);
});

Then(/^I sort the (.*) in (.*) collection in (.*) order$/, async (key, collectionName, sortOrder) => {
    await dbUtilsPage.sortRecords(db, collectionName, key, sortOrder);
});

Then(/^I close the database connection$/, async () => {
    await dbUtilsPage.closeDbConnection(db);
    var flag = false;
    if (db !== null) {
        flag = true;
    }
    flag.should.equal(false);
});

Then(/^I filter the records from (.*) collection whose (.*) in the (.*) is (.*)$/, async (collectionName, nestedKey, key, value) => {
    await dbUtilsPage.selectRecordNestedFilter(db, collectionName, nestedKey, key, value);
});

Then(/^I select all the records from (.*) collection whose (.*) is (.*)$/, async (collectionName, key, value) => {
    dbData = await dbUtilsPage.selectRecords(db, collectionName, key, value);
});


Then(/^I validate that the data fetched is correct$/, async () => {
    // Validate the data
    dbData = JSON.stringify(dbData).toLowerCase();
    let expectedData = JSON.stringify(testData['TestDataResponse1']).toLowerCase();
    // Applying assertion
    expectedData.should.deep.equal(dbData);
});

Then(/^I validate that test data 2 fetched above is correct$/, async () => {
    var expectedData = testData['TestDataResponse3'];
    // Applying assertion
    expectedData.should.jsonEqual(dbData);
});

