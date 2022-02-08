class PaytmHomePageLocators {
    constructor() {
     
      this.imgLogoPaytm = '//i[@class="iconPaytm"]';
      this.lblHeaderOptions = '//div[@class="_2kcr"]//div[contains(@class,"_1rUn")]//span[@class="_160X"]';
      this.lblHeaderOptionMore = '//div[@class="_2kcr"]//div[contains(@class,"_1rUn")]//span[text()="More"]';
      this.lblMoreOptions = '//a[@class="_3t0b"]//span[@class="_3-JW"]';
      this.lblMobileRecharge = '//div[text()="Mobile Recharge or Bill Payment"]';
      this.radioBtnPrepaid = '//label[text()="Prepaid"]//input[@id="radio0"]';
      this.radioBtnPostpaid = '//label[text()="Postpaid"]//input[@id="radio1"]';
    }
  }
  
  module.exports = PaytmHomePageLocators;