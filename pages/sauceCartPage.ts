import { Page, Locator, expect } from "@playwright/test"

export class sauceCartPage {
    readonly page: Page;
    readonly addToCart: Locator;
    readonly cartBox: Locator;

    constructor (page: Page) {
        this.page = page;
        this.addToCart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.cartBox = page.locator("//a[@class='shopping_cart_link']");
    }

    async AddToCart() {
        await this.addToCart.click();
    }

    async CartBox() {
        await this.cartBox.click(); 
    }

}