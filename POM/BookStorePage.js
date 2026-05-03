const BasePage = require('./BasePage')
class BookStorePage extends BasePage{
    constructor(page){
        super(page)
        this.page = page
        this.bookStoreCard = 'Book Store Application'
        this.searchBox = '#searchBox'
        this.bookTitle = '//tbody//td[2]//a';
        this.bookAuthor = '//tbody//td[3]';
        this.bookPublisher = '//tbody//td[4]';
    }
    async navigateToUrl(url) {
        await this.page.goto(url)
    }

    async clickBookStoreCard(){
        await this.page.getByText(this.bookStoreCard).scrollIntoViewIfNeeded()
        await this.page.getByText(this.bookStoreCard).click()
    }
    
    async searchBoxBtn(bookName){
        await this.page.locator(this.searchBox).fill(bookName)
    }

    async validateBook(bookName){
        return await this.page.locator(`text=${bookName}`).isVisible()
    }
    async getBookDetails(){
    const title = await this.page.locator(this.bookTitle).textContent();
    const author = await this.page.locator(this.bookAuthor).textContent();
    const publisher = await this.page.locator(this.bookPublisher).textContent();

    return {
        title: title?.trim(),
        author: author?.trim(),
        publisher: publisher?.trim()
        };
    }
 
}
module.exports = BookStorePage