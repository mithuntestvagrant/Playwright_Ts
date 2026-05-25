import { Page,Locator,expect } from "@playwright/test"; 
export class CheckoutPage{
    readonly page:Page;

    readonly CheckoutButton:Locator;
    readonly FirstNameInput:Locator;
    readonly LastNameInput:Locator;
    readonly PostalCodeInput:Locator;
    readonly ContinueButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.CheckoutButton=page.locator('#checkout');
        this.FirstNameInput=page.locator('#first-name');
        this.LastNameInput=page.locator('#last-name');
        this.PostalCodeInput=page.locator('#postal-code');
        this.ContinueButton=page.locator('#continue');
    }       

    async Checkout(){
        await this.CheckoutButton.click();
    }
    async FillCheckoutInformation(firstName:string,lastName:string,postalCode:string){
        await this.FirstNameInput.fill(firstName);
        await this.LastNameInput.fill(lastName);
        await this.PostalCodeInput.fill(postalCode);
    }
    async ContinueCheckout(){
        await this.ContinueButton.click();
    }   
}   