import { browser, by, element } from 'protractor';
export class ProductListPage {
    navigateTo() {
        return browser.get('/products');
    }
    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }
    getProducts() {
        return element.all(by.css('#ProductsTable tr'));
    }
    openProductDetails() {
        return element.all(by.css('#ProductsTable tr td'));
    }
}