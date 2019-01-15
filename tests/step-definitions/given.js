const {Given, When, Then} = require("cucumber"); 
//const OpenWeatherMapPage = require("../pageobjects/stepdefinitions.js"); 
//const searchResultsPage = require("../pageobjects/searchResults.page.js");
/*import { defineSupportCode } from 'cucumber';
import OpenWeatherMapPage from '../pageobjects/openweathermap.page';
import searchResultsPage from '../pageobjects/searchResults.page';
*/
//stepdefinitionvar = require("../step-definitions/stepdefinitions.js");
//import stepdefinitionvar from '../step-definitions/stepdefinitions.js';

	var title = browser.getTitle();
	var Searchbox = '#q';
	var SearchButton = '//form[@id="searchform"]//button[@type="submit"]';
	var Results = '//div[@id="forecast_list_ul"]';
	var errorMsg = '//div[@class="alert alert-warning"]';

Given(/^User opens OpenWeatherMap Website$/, () => {
   browser.url("https://openweathermap.org");
   browser.getTitle().should.equal('Сurrent weather and forecast - OpenWeatherMap');
   //stepdefinitionvar.open();
    //stepdefinitions.verifyPageLoaded();
});

Given(/^User is on Search Page$/, () => {
   browser.url("https://openweathermap.org");
   browser.getTitle().should.equal('Сurrent weather and forecast - OpenWeatherMap');
   console.log("Inside User search");
   //stepdefinitionvar.open();
});

When(/^User enters invalidcity into search field$/, () => {
    browser.waitForEnabled('#q', 500)
    	.then(browser.setValue('#q',"asdf"))
    	.then(browser.waitForExist('//form[@id="searchform"]//button[@type="submit"]',5000)
    	.then(browser.click('//form[@id="searchform"]//button[@type="submit"]')));
    	
    console.log("Inside second when part 1");
    
  /*  browser.waitForExist('//form[@id="searchform"]//button[@type="submit"]', 5000)
    .then(browser.click('//form[@id="searchform"]//button[@type="submit"]'));
    console.log("Inside User enters invalidcity into search field");
    /*
    browser.clearElement('#q');
    browser.setValue('#q',"ASDF");
    browser.click('//form[@id="searchform"]//button[@type="submit"]');*/
});

When(/^User enters validcity into search field$/, () => {
    browser.waitForVisible('#q', 5000)
    	.then(browser.setValue('#q',"MUMBAI"));    	
    console.log("Inside third when part 1");
    	
    browser.click('//form[@id="searchform"]//button[@type="submit"]');
	console.log("Inside User enters validcity into search field");
  /*  browser.setValue('#q',"MUMBAI");
    browser.pause('5000');
    browser.click('//form[@id="searchform"]//button[@type="submit"]'); */
    //browser.enterText(cityName);
    //browser.search();
    //stepdefinitionvar.enterText(cityName);
    //stepdefinitionvar.search();
    //console.log("Inside When of third scenario");
    
});

Then(/^Page is loaded successfully$/, () => {
    
      //stepdefinitionvar.validateErrorMsg(msg);
     browser.waitForExist('#q', 5000);
     browser.waitForExist('//form[@id="searchform"]//button[@type="submit"]', 5000);
     console.log("Inside Page is loaded successfully.");
       //SearchBox.waitForExist(1000);
        //SearchButton.waitForExist(1000);
});

Then(/^Error Message is displayed$/, (msg) => {
    //stepdefinitionvar.validateErrorMsg(msg);
    browser.waitForVisible('//div[@class="alert alert-warning"]', 5000)
    	.then(browser.getText('//div[@class="alert alert-warning"]').should.equal('Not found'));
    	console.log("Error Messages are displayed. ");
});

Then(/^Weather Reports are displayed$/, (msg) => {
	browser.isVisible(Results);
	browser.waitForVisible(Results,5000);
    console.log("Inside Weather reports are displayed. ");
});