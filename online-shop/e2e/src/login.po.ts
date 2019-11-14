import { browser, by, element } from 'protractor';

export class LoginPage {
    private loginData = {
        username: 'doej',
        password: 'password'
    };
  navigateTo() {
    return browser.get('/login') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  fillLoginData(loginData: any = this.loginData) {
    element(by.name('username')).sendKeys(loginData.username);
    element(by.name('password')).sendKeys(loginData.password);
    element(by.css('.forsubmit')).click();
  }
}