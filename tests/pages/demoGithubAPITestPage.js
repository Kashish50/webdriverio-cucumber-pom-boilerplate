const NativePage = require('./native.page.js');
const yaml = require('js-yaml');
const fs = require('fs');
//const baseRequestOne = require('tests/baseRequests/baseRequestOne.yml');
const inputData = require('../files/testData/demoAPITestData.js');
var res;
const request = require('request-promise');
var options;
var config;

class DemoGithubAPITestPage extends NativePage {

    async readBaseRequestOne() {
        try {
            // config = await yaml.safeLoad(fs.readFileSync('tests/baseRequests/baseRequestOne.yml', 'utf8'));
            let rawdata = fs.readFileSync('tests/baseRequests/baseRequestOne.json');
            let config = JSON.parse(rawdata);
            options = config['options'];

        } catch (e) {
            console.log(e);
        }
        return options;
    }

    async readBaseRequestTwo() {
        try {
            // config = await yaml.safeLoad(fs.readFileSync('tests/baseRequests/baseRequestTwo.yml', 'utf8'));
            // options = config.options;
            let rawdata = fs.readFileSync('tests/baseRequests/baseRequestTwo.json');
            let config = JSON.parse(rawdata);
            options = config['options'];

        } catch (e) {
            console.log(e);
        }
        return options;
    }



} module.exports = DemoGithubAPITestPage;