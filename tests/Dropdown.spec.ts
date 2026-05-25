import{test,expect} from "@playwright/test";    
test("dropdown test",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.selectOption("#dropdown-class-example",{index:1});
    await expect(page.locator("#dropdown-class-example")).toHaveValue("option1");
    await expect(page.locator("#dropdown-class-example")).toHaveText("Option1");
})