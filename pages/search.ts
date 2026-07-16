import { Page,Locator,expect } from "@playwright/test";

 export class search{
    readonly page:Page;
    readonly searchBox:Locator;
    readonly searchButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.searchBox=page.locator("//input[@name='field-keywords']")
        this.searchButton=page.locator("#nav-search-submit-button")
    }
    async goto(){
        await this.page.goto("https://www.amazon.in/")
     }

     async textBox(text: string){
        await this.searchBox.fill(text);
        await this.searchButton.click();
    }
        
}