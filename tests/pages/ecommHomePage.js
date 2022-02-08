const NativePage = require('./native.page.js');
const inputData = require('../files/testData/ecommerceData.js');
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
 

class HomePage extends NativePage {

    get homePageElement() {
        return this.getPage('ecommHomePageLocators');
      }

          navigateToURL(){
          browser.url(inputData['url'])
      }

      validateSignInButtonDisplay(){
          const btnSignIn = $(this.homePageElement.btnSignIn)
          btnSignIn.isDisplayed().should.equal(true)
      }

      clickSignInButton(){
        const btnSignIn = $(this.homePageElement.btnSignIn)
        
        btnSignIn.click()
      }

   
}  
module.exports = HomePage;