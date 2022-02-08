import { expect as chaiExpect } from 'chai';
import 'chai/register-should';

const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits');
const EC = ExpectedConditions;

class ProductsSearchPage {
    get btnAddToBag() {
        return $('//android.widget.TextView[contains(@resource-id,"AddToCart")]');
    }
    get btnBuyNow() {
        return $('//android.widget.TextView[contains(@resource-id,"BuyNow")]');
    }
    get btnSkipAndContinue() {
        return $('//android.widget.TextView[contains(@resource-id,"add_and_continue")]');
    }
    get lblAddedToCart() {
        return $('//android.widget.TextView[@text="Added to Cart"]');
    }
    
    selectProduct(productName) {
        let option = $('//android.widget.TextView[@text="' + productName + '"]');
        while (option.isDisplayed() == false) {
            driver.touchPerform([{
                action: 'press',
                options: { x: 630, y: 580 },
            }, {
                action: 'wait',
                options: { ms: 500 },
            }, {
                action: 'moveTo',
                options: { x: 630, y: 145 },
            }, {
                action: 'release',
            }]);
        }
        if (option.isDisplayed() == true) {
            console.log('Product found !!');
            option.click();
        }
    }
    isBtnAddToBagDisplayed() {
        this.btnAddToBag.waitForDisplayed();
        this.btnAddToBag.isDisplayed().should.equal(true);
    }
    clickBtnAddToBag() {
        this.btnAddToBag.click();
    }
    clickBtnSkipAndContinue() {
        this.btnSkipAndContinue.waitForDisplayed();
        this.btnSkipAndContinue.click();
    }
    isLblAddedToCartDisplayed() {
        this.lblAddedToCart.waitForDisplayed();
        this.lblAddedToCart.isDisplayed().should.equal(true);
    }

} module.exports = ProductsSearchPage;