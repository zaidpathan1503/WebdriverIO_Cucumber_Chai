//const Page = require("./page");

//import Page from './page';

class searchResultsPage {

get Title() { return browser.getTitle(); }
get Results() { return browser.element('//div[@id="forecast_list_ul"]'); }
get errorMsg() { return browser.element('//div[@class="alert alert-warning"]'); }




cityNotFound() {
    this.errorMsg.isVisible();
}

searchSuccessfull(item) {
    this.Results.isVisible();
}
}

//export default searchResultsPage();
//export default new searchResultsPage();