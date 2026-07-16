import { Page,Locator,expect } from "@playwright/test";

export class amazonCart{
    readonly page:Page;
    readonly cart:Locator;
    readonly boxButton:Locator;
    readonly buy:Locator;

    constructor(page:Page){
        this.page=page;
        this.cart=page.locator('//button[text()="Add to cart" and @id="a-autoid-1-announce"]')
        this.boxButton=page.locator("//span[@class='nav-cart-icon nav-sprite']")
        this.buy=page.locator("#sc-buy-box-ptc-button")
    }
    async cartClick(){
        await this.cart.click();
    }
    async boxClick(){
        await this.boxButton.click()
    }
   async buyClick(){
    await this.buy.click()
   }

}

