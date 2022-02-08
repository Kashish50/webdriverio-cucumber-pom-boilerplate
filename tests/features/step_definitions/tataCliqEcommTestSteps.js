const { Given, When, Then } = require('cucumber');

const home = require('../../pages/tataCliqPages/tataCliqAppHomePage.js');
const homePage = new home();

const productsSearch = require('../../pages/tataCliqPages/productsSearchPage.js');
const productsSearchPage = new productsSearch();

const myBag = require('../../pages/tataCliqPages/myBagPage.js');
const myBagPage = new myBag();


Given(/^I am successfully able to launch the android mobile app$/, () => {
    homePage.isAppLaunched();
});

Then(/^I search for the (.*)$/, (searchKeywords) => {
    let outputstr= searchKeywords.replace(/'/g,'');
    homePage.searchAItem(outputstr);
});

Then(/^I select (.*) from the search suggestions$/, (optionName) => {
    let outputstr= optionName.replace(/'/g,'');
    console.log(outputstr);
    homePage.selectOptionFromSearchSuggestions(outputstr);
});

Then(/^I select (.*) from the products search list$/, (productName) => {
    let outputstr= productName.replace(/'/g,'');
    console.log(outputstr);
    productsSearchPage.selectProduct(outputstr);
});

Then(/^the product description page opens up$/, () => {
    productsSearchPage.isBtnAddToBagDisplayed();
});

Then(/^I click on the add to bag button$/, () => {
    productsSearchPage.clickBtnAddToBag();
});

Then(/^I click skip and go to cart button$/, () => {
    productsSearchPage.clickBtnSkipAndContinue();
});

Then(/^the cart page open up successfully$/, () => {
    myBagPage.isBtnCheckoutDisplayed();
});

Then(/^the product is successfully added to the cart$/, () => {
    productsSearchPage.isLblAddedToCartDisplayed();
});

Then(/^the product is successfully removed from the cart and cart becomes empty$/, () => {
    myBagPage.isLblBagIsEmptyDisplayed();
});

Then(/^button continue shopping is displayed on the screen$/, () => {
    myBagPage.isBtnContinueShoppingDisplayed();
})

Then(/^I click on the button continue shopping$/, () => {
    myBagPage.clickBtnContinueShopping();
})

Then(/^the home page of the android app opens up$/, () => {
    homePage.isAppLaunched();
})

Then(/^I click on the remove button$/, () => {
    myBagPage.clickBtnRemoveItem();
})


