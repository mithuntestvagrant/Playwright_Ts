import{Page,Locator,expect}from "@playwright/test";
export class sauceCheckoutPage{
    readonly page:Page;
    readonly checkoutButton:Locator;
    readonly firstNameInput:Locator;
    readonly lastNameInput:Locator;
    readonly postalCodeInput:Locator;
    readonly continueButton:Locator;
    readonly finishButton:Locator;


    constructor(page:Page){
        this.page=page;
        this.checkoutButton=page.locator("//button[text()='Checkout']");
        this.firstNameInput=page.locator("#first-name");
        this.lastNameInput=page.locator("#last-name");
        this.postalCodeInput=page.locator("#postal-code");
        this.continueButton=page.locator("#continue");
        this.finishButton=page.locator("//button[text()='Finish']");
    }

    async checkout(){
        await this.checkoutButton.click();
    }
    async fillCheckoutInformation(firstName:string,lastName:string,postalCode:string){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }
    async continueCheckout(){
        await this.continueButton.click();
    }
    async finishCheckout(){
        await this.finishButton.click();
    }
}   