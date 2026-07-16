import{test,expect} from "@playwright/test"
test("practice",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iPhone');
    await page.locator('#nav-search-submit-button').click();

    await page.locator('//button[text()="Add to cart" and @id="a-autoid-1-announce"]').click()
    //await page.locator("//button[@class=' a-button-close a-declarative']").click();
    await page.locator("//span[@class='nav-cart-icon nav-sprite']").click()
    await page.locator("#sc-buy-box-ptc-button").click();
})