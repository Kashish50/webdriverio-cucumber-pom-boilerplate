const NativePage = require('./native.page.js');
const inputFormData = require('../files/testData/inputFormData.js');
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits');
const EC = ExpectedConditions

import { expect as chaiExpect } from 'chai';
import 'chai/register-should';
 var stateListValues = [];

class InputFormPage extends NativePage {

    get inputFormPageElement() {
      return this.getPage('inputForm.locators');
    }

      navigateToURL() {
      browser.url(inputFormData['url']);
    }

    validateTheInputFormPage(){
      const pageTitle = $(this.inputFormPageElement.PageTitle)
      pageTitle.waitForDisplayed();
      const value = pageTitle.getText()
      value.should.equal(inputFormData['FormPageTitle'])
    }

    inputTextFields(){
      
      var txtFieldNames = inputFormData['TxtFieldNames'].split(",")
      
      var arrayLength = txtFieldNames.length;
      for (var i = 0; i < arrayLength; i++) {
      console.log(txtFieldNames[i]);
      var txtFieldNamesEle = this.inputFormPageElement.formFields
      console.log(txtFieldNamesEle)
 //     console.log(txtFieldNamesElement.replace("strFieldName",txtFieldNames[i]))

      var newStr = txtFieldNamesEle.replace("strFieldName",txtFieldNames[i])

      var Element = $(newStr)
      Element.setValue("Kashish")
      
      
        }
    }

    validateSelectStateDropdownValue(a){
      const selectState = $(this.inputFormPageElement.selState)
      selectState.waitForDisplayed();
      const value = selectState.getValue()
      value.should.equal(a)
    }

    validateSelectStateDropdownValues(){

     
    const selectState = $(this.inputFormPageElement.selState)
     browser.waitUntil(function(){
       return selectState.isDisplayed() == true
     }, 6000, 'Dropdown is not displayed')
      selectState.click();
      
      var stateListValues = [];
      var stateList = selectState.$$('//select[@name="state"]//option')
      for(let i=0; i<stateList.length; i++){
      stateListValues.push(stateList[i].getText())
      }

      var expectedStateValues = inputFormData['ExpectedStateValues']
      stateListValues.should.include.members(expectedStateValues)
  }

  validateFieldsInForm(){
    var fields = $$(this.inputFormPageElement.formFieldsLabels)
    var fieldnames  = [];
    for(let i=0; i<fields.length; i++){
      fieldnames.push(fields[i].getText())
      }
      var expectedFieldNames = inputFormData['ExpectedFieldNames']
      fieldnames.should.include.members(expectedFieldNames)
  }

  validateRandomFunctions(){
    const radioBox = $(this.inputFormPageElement.checkBox)
    console.log("*****" + radioBox.getText());
  }
}  
module.exports = InputFormPage;