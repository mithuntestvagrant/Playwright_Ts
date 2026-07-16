import{test,expect} from "@playwright/test";

test("demo test",async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    const un=page.locator("#user-name");
    const pwd=page.locator("#password");
    const loginbutton=page.locator("#login-button");

    await un.fill("standard_user");
    await pwd.fill("secret_sauce");
    await loginbutton.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();

    await page.locator("//a[@class='shopping_cart_link']").click();

    await page.locator("//button[text()='Checkout']").click();

    const firstname=page.locator("#first-name");
    const lastname=page.locator("#last-name");
    const postalcode=page.locator("#postal-code");
    const continuebutton=page.locator("#continue");

    await firstname.fill("John");
    await lastname.fill("Doe");
    await postalcode.fill("560001");
    await continuebutton.click();

    await page.locator("//button[text()='Finish']").click();
    await expect(page.locator("//h2[text()='Thank you for your order!']")).toBeVisible();

    


})
