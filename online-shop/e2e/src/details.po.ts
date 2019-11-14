import { browser, by, element } from 'protractor';

export class DetailsPage {
  navigateTo() {
    return browser.get('/product-page/0');
  }
  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
