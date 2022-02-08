const NativePage = require('./native.page.js');
const inputData = require('../files/testData/ecommerceData.js');
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
 

class LoginPage extends NativePage {

    get loginPageElement() {
        return this.getPage('ecommLoginPageLocators');
      }

      validateLoginPage(){
          const lblAuthentication = $(this.loginPageElement.lblAuthentication)
          lblAuthentication.isDisplayed().should.equal(true)
      }

      inputEmail(Email){
        const email = $(this.loginPageElement.txtEmail)
        email.scrollIntoView()
        email.setValue(Email)
        browser.keys(['Tab'])
      }

      inputPassword(Password){
        const password = $(this.loginPageElement.txtPassword)
        password.setValue(Password)
      }

      clickSignInButton(){
        const btnSignIn = $(this.loginPageElement.btnSignIn)
        btnSignIn.click()
      }

      validateInvalidPasswordError(){
        const lblInvalidPasswordError = $(this.loginPageElement.lblInvalidPasswordError)
        lblInvalidPasswordError.isDisplayed().should.equal(true)
    }

    validateInvalidEmailValidation(){
      var email = $(this.loginPageElement.txtEmail)
      var a = email.getCSSProperty('color')
      var b = {color:'rgb(241,51,64)'}
//      console.log("Second" +b.color)
 //     var c = JSON.stringify(a)

        console.log("VALUES")
        console.log(Object.values(a))
      
      
      console.log("***************")
      for (const [key, value] of Object.entries(a)) {
        console.log(`${key}: ${value}`);
      }

      var strBuilder = [];
     for(key in b) {
     if (b.hasOwnProperty(key)) {
    strBuilder.push("Key is " + key + ", value is " + jsonObj[key] + "\n");
             if(jsonObj[key]==b.color){

             }
    }
   }

    console.log(strBuilder.join(""));

  //     var expectedOutput;
  //     for(var i=0; i<c.length; i++){

  //       console.log("First" +c[i].color)
  //       console.log("Second" +b.color)

	//     if(c[i].color===b.color){


        

  //       expectedOutput=true;
	// }

      
        
//  }

 // console.log("#####"+expectedOutput)
}
   
}  
module.exports = LoginPage;