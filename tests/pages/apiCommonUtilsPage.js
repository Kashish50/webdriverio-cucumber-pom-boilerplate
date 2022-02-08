const NativePage = require('./native.page.js');
var request = require('request-promise');
var FormData = require('form-data');
import { config, expect as chaiExpect } from 'chai';
import 'chai/register-should';
const yaml = require('js-yaml');
const fs = require('fs');
const { method } = require('lodash');
var res;
var bFlag;
var response;
var keyPath;
var keyValue;


var githubAPIRepoListKeys;
var githubAPIRepoListValues;


class APICommonUtilsPage extends NativePage {

    async makeGetRequest(options) {
        //       options.method = "GET";
        try {
            res = await request(options);
        }
        catch (err) {
            console.log(err);
        }
        return res;
    }

    async validateResponseAPI1(response, key) {
        var body = response.body;
        var bodyJSON = JSON.parse(body);

        try {
            githubAPIRepoListKeys = await yaml.safeLoad(fs.readFileSync('util/keysGithubAPIRepoList.yml', 'utf8'));
            githubAPIRepoListValues = await yaml.safeLoad(fs.readFileSync('util/responsesGithubAPIRepoList.yml', 'utf8'));
            keyPath = githubAPIRepoListKeys[key];
            keyValue = githubAPIRepoListValues[key];
            console.log('Value of key is: ' + key);
            console.log('Value of key path is: ' + keyPath);

        } catch (e) {
            console.log(e);
        }
        for (var i = 0; i < bodyJSON.length; i++) {
            if (bodyJSON[i][keyPath] == [keyValue]) {
                console.log("FOUND")
                bFlag = true;
            }
        }
        console.log('Value of bFlag is ' + bFlag);
        return bFlag;
    }

    async validateResponseAPI2(response, key) {
        // console.log(response.body);
        var body = response.body;
        // var bodyJSON = JSON.parse(body);
        try {
            // Parse a JSON
            var bodyJSON = JSON.parse(body);
        } catch (e) {
            bodyJSON = body;
        }

        try {
            githubAPIRepoListKeys = await yaml.safeLoad(fs.readFileSync('util/keysGithubAPIRepoCreation.yml', 'utf8'));
            githubAPIRepoListValues = await yaml.safeLoad(fs.readFileSync('util/responsesGithubAPIRepoCreation.yml', 'utf8'));
            keyPath = githubAPIRepoListKeys[key];
            keyValue = githubAPIRepoListValues[key];
            console.log('Value of key is: ' + key);
            console.log('Value of key path is: ' + keyPath);
            console.log('Value of key value is: ' + keyValue);

        } catch (e) {
            console.log(e);
        }
        if (bodyJSON[keyPath] == [keyValue]) {
            console.log("FOUND")
            bFlag = true;
        }
        console.log('Value of bFlag is ' + bFlag);
        return bFlag;
    }

    async setResponse(options) {
        response = await request(options);
    }

    async getResponse() {
        return response;
    }

    async getResponseStatusCode(response) {
        return response.statusCode;
    }

} module.exports = APICommonUtilsPage;