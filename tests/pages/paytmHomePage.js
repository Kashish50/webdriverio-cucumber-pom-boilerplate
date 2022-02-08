const NativePage = require('./native.page.js');
const inputData = require('../files/testData/paytmTestDataOne.js');
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
import { eq } from 'lodash';


class PaytmHomePage extends NativePage {

    get homePageElement() {
        return this.getPage('PaytmHomePageLocators');
    }
    get lblMobileRecharge() {
        return $('//div[text()="Mobile Recharge or Bill Payment"]');
    }
    get radioBtnPrepaid() {
        return $('//label[text()="Prepaid"]//input[@id="radio0"]');
    }
    get radioBtnPostpaid() {
        return $('//label[text()="Postpaid"]//input[@id="radio1"]');
    }
    get imgLogoPaytm() {
        return $('//i[@class="iconPaytm"]');
    }
    get lblHeaderOptionMore() {
        return $('//div[@class="_2kcr"]//div[contains(@class,"_1rUn")]//span[text()="More"]');
    }
    get lblHeaderOptions() {
        return $$('//div[@class="_2kcr"]//div[contains(@class,"_1rUn")]//span[@class="_160X"]');
    }
    get lblMoreOptions() {
        return $$('//a[@class="_3t0b"]//span[@class="_3-JW"]');
    }
    get inputMobileNumber() {
        return $('//input[@type="tel"]');
    }
    get operatorDropdownValues() {
        return $$('//label[text()="Operator"]/..//div[@class="_14mD"]//ul//li');
    }
    get inputMobileOperator() {
        return $('//div[@class="_2CU_"]//input[@type="text"]');
    }
    get inputMobileOperatorCircle() {
        return $('//label[text()="Circle"]/..//input[@type="text"]');
    }
    get btnChangeOperator() {
        return $('//div[@class="eFju"]');
    }
    get divMobileOperatorDropdown() {
        return $('//div[@class="_14mD"]');
    }
    get lblBookOnPaytm() {
        return $('//div[text()="Book on Paytm"]');
    }
    get optionsBookOnPaytm() {
        return $$('//div[text()="Book on Paytm"]/..//div[@class="_10Am"]//div[@class="_3Xyq"]');
    }
    get btnFwdArrowBookOnPaytmOptions() {
        return $('//div[text()="Book on Paytm"]/..//div[@class="_1JVU _3pq_"]');
    }

    navigateToURL() {
        browser.url(inputData['url']);
    }
    isHomePageDisplayed() {
        return this.imgLogoPaytm.isDisplayed();
    }
    validateHeaderOptions() {
        let headerOptionsNames = [];
        for (let i = 0; i < this.lblHeaderOptions.length; i++) {
            headerOptionsNames.push(this.lblHeaderOptions[i].getText());
        }
        let expectedHeaderOptionNames = inputData['ExpectedHeaderOptionNames'];
        headerOptionsNames.should.include.members(expectedHeaderOptionNames);
    }
    hoverOverMoreOptions() {
        this.lblHeaderOptionMore.moveTo();
    }
    validateMoreOptions() {
        let lblMoreOptionsNames = [];
        for (let i = 0; i < this.lblMoreOptions.length; i++) {
            lblMoreOptionsNames.push(this.lblMoreOptions[i].getText());
        }
        let expectedMoreOptionsNames = inputData['ExpectedMoreOptionNames'];
        lblMoreOptionsNames.should.include.members(expectedMoreOptionsNames);
    }
    isPrepaidRadioButtonSelected() {
        let bFlag = this.radioBtnPrepaid.isSelected();
        bFlag.should.equal(true);
    }
    get mobileNumber() {
        return this.inputMobileNumber.getValue();
    }
    validateMobileNumberMaxLength() {
        this.mobileNumber.should.have.lengthOf(10);
    }

    set mobileNumber(mNumber) {
        this.inputMobileNumber.setValue(mNumber);
    }
    set mobileOperator(mOperator) {
        for (let i = 0; i < this.operatorDropdownValues.length; i++) {
            this.operatorDropdownValues[i].waitForDisplayed({ timeout: 10000 });
            if (this.operatorDropdownValues[i].getText() == mOperator) {
                this.operatorDropdownValues[i].click();
                break;
            }
        }
    }
    get mobileOperator() {
        return this.inputMobileOperator.getValue();
    }
    validateMobileOperator(mOperator) {
        this.mobileOperator.should.equal(mOperator);
    }
    isinputMobileOperatorCircleDisplayed() {
        return this.inputMobileOperatorCircle.isDisplayed();
    }
    isbtnChangeMobileOperatorDisplayed() {
        return this.btnChangeOperator.isDisplayed();
    }
    // verifyong the color of web element
    validateColorButtonChangeMobileOperator() {
        let obj = this.btnChangeOperator.getCSSProperty('color');
        let expectedColorValue = 'rgba(0,185,245,1)';
        let actualColorValue = obj.value;
        actualColorValue.should.equal(expectedColorValue);
    }
    scrollToBookOnPaytm() {
        this.lblBookOnPaytm.scrollIntoView();
        this.lblBookOnPaytm.moveTo();
    }
    isLblBookOnPaytmDisplayed() {
        return this.lblBookOnPaytm.isDisplayed();
    }
    validateBookOnPaytmOption(optionName) {
        let bFlag = false;
        let option = $('//div[text()="Book on Paytm"]/..//div[@class="_10Am"]//div[@class="_3Xyq"]//span[text()="' + optionName + '"]');
        if (option.isDisplayed()) {
            bFlag = true;
        }
        else {
            this.btnFwdArrowBookOnPaytmOptions.click();
            bFlag = option.isDisplayed();
        }
        bFlag.should.equal(true);
    }
    selectHeaderOption(optionName) {
        let bFlag = false;
        let option = $('//div[@class="_2kcr"]//a[@title="' + optionName + '"]');
        option.click();
    }
}
module.exports = PaytmHomePage;