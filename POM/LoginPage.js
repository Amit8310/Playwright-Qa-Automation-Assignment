const BasePage = require('./BasePage')
class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.page = page
        this.loginBtn = '#login';
        this.username = '#userName';
        this.password = '#password';
        this.loginButton = '#login';
        this.userLabel = '#userName-value';
        this.logoutBtn = '#submit';
    }
    async clickLoginBtn(){
        await this.page.locator(this.loginBtn).click();
    }
    async login(user, pass){
        await this.page.locator(this.username).fill(user);
        await this.page.locator(this.password).fill(pass);
        await this.page.locator(this.loginButton).click();
    }
    async validateLogin(expectedUser){
        await this.page.waitForSelector(this.userLabel);
        const actualUser = await this.page.locator(this.userLabel).textContent();
        return actualUser === expectedUser;
    }
    async logoutBtnVisiblity(){
         const logoutButton = await this.page.locator(this.logoutBtn).nth(0)
         await logoutButton.waitFor({state : 'visible', timeout :5000})
         return await logoutButton.isVisible()
    }
    async logout() {
    await this.page.locator(this.logoutBtn).nth(0).click();
  }
}
module.exports = LoginPage