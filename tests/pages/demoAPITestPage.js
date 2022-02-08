const NativePage = require('./native.page.js');
var request = require('request-promise');
var axios = require('axios');
const inputData = require('../files/testData/demoAPITestData.js');
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions
var FormData = require('form-data');
var Validator = require('json-schema').Validator;
const _ = require("lodash");

import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';

var context = "Global (ie. window)";
var options;
var bodyFormData;
var res;
var opt;
var res1;


class DemoAPITestPage extends NativePage {


    async makeGetRequest(options) {
        options.method = "GET";
        try {
            res = await request(options)
        }
        catch (err) {
            console.log(err);
        }
        return res;
    }

    async makeDeleteRequest(options) {
        options.method = "DELETE";
        try {
            res = await request(options)
        }
        catch (err) {
            console.log(err);
        }
        return res;
    }

    async makePostRequest(options) {
        options.method = "POST";
        try {
            res = await request(options)
            console.log(res.statusCode)
        }
        catch (err) {
            console.log(err);
        }
        return res;
    }

    async makeGetRequestDemoAPI1() {
        options = {
            uri: 'https://reqres.in/api/users/2',
            resolveWithFullResponse: true
        };
        return await this.makeGetRequest(options)
    }

    async makeDeleteRequestDemoAPI2() {
        options = {
            uri: 'https://reqres.in/api/users/2',
            resolveWithFullResponse: true
        };
        return await this.makeDeleteRequest(options)
    }

    async makePostRequestDemoAPI3() {
        var bodyFormData = new FormData();
        bodyFormData.append('name', 'morpheus');
        bodyFormData.append('job', 'leader');
        options = {
            uri: 'https://reqres.in/api/users',
            data: bodyFormData,
            resolveWithFullResponse: true
        };
        return await this.makePostRequest(options)
    }

    async validateStatusDemoAPI1(statusCode, response) {
        //     var response = await this.makeGetRequest()
        var statusCode = response.statusCode
        statusCode.should.equal(statusCode)
    }

    async validateUserIDDemoAPI1(id, response) {
        //   var response = await this.makeGetRequest()
        var body = response.body;
        var bodyJSON = JSON.parse(response.body);

        var id = bodyJSON.data.id;
        id.should.equal(id)
    }

    async validateKeysDemoAPI1(keys, response) {
        //      var response = await this.makeGetRequest()
        var body = response.body;
        var bodyJSON = JSON.parse(response.body);

        var expectedKeys = [];
        expectedKeys = keys.split(',')
        var actualkeys = [];
        for (var k in bodyJSON) {
            actualkeys.push(k);
        }
        console.log("KEYS ARE :" + actualkeys)
        console.log(" Expected KEYS ARE :" + expectedKeys)
        actualkeys.should.deep.equal(expectedKeys)
    }

    async validateNestedKeysDemoAPI1(response, key, nestedKeys) {
        //     var response = await this.makeGetRequest()
        //      var body = response.body.data;
        var bodyJSON = JSON.parse(response.body);
        var exkey = key.valueOf();
        var nestedJson = bodyJSON[key];

        console.log("VALUE OF KEY IS :::: " + exkey)
        console.log(nestedJson)

        var expectedNestedKeys = [];
        expectedNestedKeys = nestedKeys.split(',')
        var actualNestedKeys = [];
        for (var k in nestedJson) {
            actualNestedKeys.push(k);
        }
        console.log("Actual KEYS ARE :" + actualNestedKeys)
        console.log(" Expected KEYS ARE :" + expectedNestedKeys)
        actualNestedKeys.should.deep.equal(expectedNestedKeys)
    }



    async validateStatusDemoAPI2(statusCode, response) {
        //      var response = await this.makeDeleteRequest()
        var statusCode = response.statusCode
        statusCode.should.equal(statusCode)
    }



    async validateStatusDemoAPI3(statusCode, response) {
        //      var response = await this.makeDeleteRequest()
        var statusCode = response.statusCode
        statusCode.should.equal(statusCode)
    }

    async validateNameDemoAPI3(response) {
        //    var response = await this.makePostRequest()
        var body = response.body;
        var bodyJSON = JSON.parse(body);

        var id = bodyJSON.id;
        var flag = id.length;
        flag.should.equal(3)
    }

    async makeGetRequestDemoAPI4() {
        options = {
            uri: 'https://reqres.in/api/users/2',
            resolveWithFullResponse: true
        };
        return await this.makeGetRequest(options)
    }

    async validateSchemaDemoAPI4(response) {
        var v = new Validator();
        var instance = 4;
        var schema = {
            "data": {
                "id": { "type": "number" },
                "email": { "type": "string" },
                "first_name": { "type": "string" },
                "last_name": { "type": "string" },
                "avatar": { "type": "string" },
            },
            "support": {
                "url": { "type": "string" },
                "text": { "type": "string" }
            }
        }

        console.log("OUTPUT*********")
        console.log(v.validate(response, schema));

    }

    async makeGetRequestDemoAPI5() {
        options = {
            uri: 'https://reqres.in/api/users?page=2',
            resolveWithFullResponse: true
        };
        return await this.makeGetRequest(options)
    }

    async printIDFirstRecord(response) {
        var body = response.body;
        var bodyJSON = JSON.parse(body);

        console.log(bodyJSON.data)

        var data = [];
        data = bodyJSON.data;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == 12) {
                console.log("FOUND")
            }
        }
        let grouped = _.reduce(users, (result, user) => {

            (result[user.occupation] || (result[user.occupation] = [])).push(user);  
            return result;
        }, {});
        
        console.log(grouped);
    }

}
module.exports = DemoAPITestPage;