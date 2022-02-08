class InputFormLocators {
    constructor() {
      this.formFields = '//label[@class="col-md-4 control-label" and text()="strFieldName"]/../div[contains(@class,"inputGroupContainer")]//input[@class="form-control"]';
      this.PageTitle = '//div[@id="site-slogan"]';
      this.selState = '//select[@name="state"]';
      this.selStateOptions = '//select[@name="state"]//option';
      this.formFieldsLabels = '//label[@class="col-md-4 control-label"]';
      this.checkBox = "//label[contains(text(),'hosting?')]/..//div[@class='radio']//input[@value='yes']";
    }
  }
  
  module.exports = InputFormLocators;