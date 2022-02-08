class HomePageLocators {
    constructor() {
     
      this.btnSignIn = '//a[contains(@title,"Log in")]';
      this.inputSearchBar = '//input[@id="search_query_top"]';
      this.btnSearch = '//button[@name="submit_search"]';
      this.headerOptions = '//ul[contains(@class,"sf-menu")]//li//a';
    
    }
  }
  
  module.exports = HomePageLocators;