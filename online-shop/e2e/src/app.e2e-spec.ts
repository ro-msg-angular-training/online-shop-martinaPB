import { AppPage } from './app.po';
import { LoginPage } from './login.po';
import { ProductListPage } from './product-list.po';
import { DetailsPage } from './details.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginPage;
  let list: ProductListPage;
  let details: DetailsPage;

  beforeEach(() => {
    page = new AppPage();
    login = new LoginPage();
    list = new ProductListPage();
    details = new DetailsPage();
  });

  it('should navigate to App Page', () => {
    page.navigateTo();
  });
  it('should navigate to Login Page', () => {
    login.navigateTo();
  });
  it('should have title Login Page', () => {
    expect(login.getTitleText()).toEqual('Login Page');
  });
  it('should fill in login data and navigate to product list with title Products', () => {
    login.navigateTo();
    login.fillLoginData();
    expect(list.getTitleText()).toEqual('Products');
  });
  it('product list should be displayed', () => {
    login.navigateTo();
    login.fillLoginData();
    expect(list.getProducts().count()).toBe(52);
  });
  it('should display product details', () => {
    login.navigateTo();
    login.fillLoginData();
    browser.wait(list.getProducts(), 5000);
    //list.openProductDetails().click();
    details.navigateTo();
    //expect(browser.getCurrentUrl()).toContain('/product-page/0');
    expect(list.openProductDetails()).toBeTruthy();
    expect(details.getTitleText()).toBe('Product: Notebook Basic 15');
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
