const { test, expect } = require('@playwright/test');
const LoginPage = require('../POM/LoginPage');
const BookStorePage = require('../POM/BookStorePage');
console.log('📌 LoginPage path:', require.resolve('../POM/LoginPage'));
const testData = require('../testData/data.json');

test.describe('Book Store Application Tests', () => {

  let loginPage;
  let bookStorePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    bookStorePage = new BookStorePage(page);

    await bookStorePage.navigateToUrl(testData.baseUrl);
  });

  test('Login Test', async ({ page }) => {
    await bookStorePage.clickBookStoreCard();


    await loginPage.clickLoginBtn();
    await loginPage.login(testData.username, testData.password);

    const isValidUser = await loginPage.validateLogin(testData.username);
    expect(isValidUser).toBeTruthy();

    const isLogoutVisible = await loginPage.logoutBtnVisiblity();
    expect(isLogoutVisible).toBeTruthy();
  });

  test('Search and Validate Book', async ({ page }) => {

    await bookStorePage.clickBookStoreCard();

    await bookStorePage.searchBoxBtn(testData.bookName);

    const isBookVisible = await bookStorePage.validateBook(testData.bookName);
    expect(isBookVisible).toBeTruthy();
  });

  test('Get Book Details', async ({ page }) => {

    await bookStorePage.clickBookStoreCard();

    await bookStorePage.searchBoxBtn(testData.bookName);

    const details = await bookStorePage.getBookDetails();

    console.log('Book Details:', details);

    expect(details.title).toContain(testData.bookName);
    expect(details.author).not.toBe('');
    expect(details.publisher).not.toBe('');
  });

  test('Login and Logout Flow', async ({ page }) => {
    await bookStorePage.clickBookStoreCard();


    await loginPage.clickLoginBtn();
    await loginPage.login(testData.username, testData.password);

    expect(await loginPage.logoutBtnVisiblity()).toBeTruthy();

    await loginPage.logout();

    await page.waitForSelector('#login');
    expect(await page.locator('#login').isVisible()).toBeTruthy();
  });

});

