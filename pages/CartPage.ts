import { Page,expect,Locator } from "@playwright/test";
export class CartPage{
    readonly page:Page;

    readonly AddToCartButton:Locator;
    readonly BoxCart:Locator;

    constructor(page:Page){
        this.page=page;
        this.AddToCartButton=page.locator('#add-to-cart-sauce-labs-backpack');
        this.BoxCart=page.locator('.shopping_cart_link');
    }

    async AddToCart(){
        await this.AddToCartButton.click();
    }
    async BoxCartButton(){
        await this.BoxCart.click();
    }   

    async VerifyAddToCart(){
        await expect(this.BoxCart).toHaveText('1');
    }               

}