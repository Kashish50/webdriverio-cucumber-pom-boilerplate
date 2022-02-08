import { expect as chaiExpect } from 'chai';
import 'chai/register-should';

const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits');
const EC = ExpectedConditions;

class MyBagPage {
    get btnCheckOut() {
        return $('//android.widget.TextView[contains(@resource-id,"my_bag_checkout")]');
    }
    get btnRemoveItem() {
        return $('//android.widget.TextView[contains(@resource-id,"remove_product")]');
    }

    get lblBagIsEmpty() {
        return $('//android.widget.TextView[contains(@resource-id,"my_bag_exmpty")]');
    }
    get btnContinueShopping() {
        return $('//android.widget.TextView[contains(@resource-id,"continue_shopping")]');
    }

    isBtnCheckoutDisplayed() {
        this.btnCheckOut.waitForDisplayed();
        this.btnCheckOut.isDisplayed().should.equal(true);
    }
    clickBtnRemoveItem() {
        this.btnRemoveItem.waitForDisplayed();
        this.btnRemoveItem.click();
    }
    isLblBagIsEmptyDisplayed() {
        this.lblBagIsEmpty.waitForDisplayed();
        this.lblBagIsEmpty.isDisplayed().should.equal(true);
    }
    isBtnContinueShoppingDisplayed() {
        this.btnContinueShopping.waitForDisplayed();
        this.btnContinueShopping.isDisplayed().should.equal(true);
    }
    clickBtnContinueShopping() {
        this.btnContinueShopping.click();
    }

} module.exports = MyBagPage;