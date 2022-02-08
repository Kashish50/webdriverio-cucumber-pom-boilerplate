import { expect as chaiExpect } from 'chai';
import 'chai/register-should';

const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits');
const EC = ExpectedConditions;

class TataCliqAppHomePage {

    get imgMainLogo() {
        return $('//android.widget.ImageView[contains(@resource-id,"toolbar_icon")]');
    }
    get btnSearchItem() {
        return $('//android.widget.TextView[contains(@resource-id,"item_search")]');
    }
    get inputSearchBar() {
        return $('//android.widget.EditText[contains(@resource-id,"search_src_text")]');
    }

    isAppLaunched() {
        this.imgMainLogo.waitForDisplayed();
        this.imgMainLogo.isDisplayed().should.equal(true);
    }
    selectOptionFromSearchSuggestions(optionName) {
        let option = $('//android.widget.TextView[contains(@resource-id,"title") and @text="' + optionName + '"]');
        option.waitForDisplayed();
        option.click();
    }
    searchAItem(searchKeywords) {
        this.btnSearchItem.click();
        this.inputSearchBar.waitForDisplayed();
        this.inputSearchBar.setValue(searchKeywords);
    }
} module.exports = TataCliqAppHomePage;