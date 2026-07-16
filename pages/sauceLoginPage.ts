import{Page,Locator,expect} from "@playwright/test";

export class sauceLoginPage{
    readonly page:Page;
    readonly userInput: Locator;
    readonly paswordInput: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.userInput=page.locator('#user-name');
        this.paswordInput=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }

    async goto(){

        await this.page.goto('https://www.saucedemo.com/');


    }

    async login (username:string,password:string){
        await this.userInput.fill(username);
        await this.paswordInput.fill(password);
        await this.loginButton.click();
    }


}
