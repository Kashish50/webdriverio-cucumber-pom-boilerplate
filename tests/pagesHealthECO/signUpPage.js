const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
import { eq } from 'lodash';


class HealthECOHomePage {

    get btnSignUp() {
        return $('//android.view.View[@content-desc="Sign Up Now!"]');
    }
    get btnLogin() {
        return $('//android.view.View[@content-desc="Log in"]');
    }

    isAppLaunched() {
        this.btnSignUp.waitForDisplayed();
        this.btnSignUp.isDisplayed().should.equal(true);
    }
}
module.exports = HealthECOHomePage;   