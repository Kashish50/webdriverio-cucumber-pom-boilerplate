import { expect as chaiExpect } from 'chai';
import 'chai/register-should';

const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits');
const EC = ExpectedConditions;

class PaytmAppHomePage {
    launchApp() {
        console.log('App launched successfully');
    }
    get btnSkip() {
        return $('//android.widget.TextView[@resource-id="net.one97.paytm:id/txtSkip"]');
    }

    isBtnSkipDisplayed() {
        this.btnSkip.waitForDisplayed();
        let bFlag = this.btnSkip.isDisplayed();
        bFlag.should.equal(true);
    }


} module.exports = PaytmAppHomePage;