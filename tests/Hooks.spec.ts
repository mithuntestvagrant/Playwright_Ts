import {test,expect} from "@playwright/test";

    test.beforeAll(async()=>{
        console.log("Before All");  

    })
    test.beforeEach(async()=>{
        console.log("Before Each");  
    })
    test.afterEach(async()=>{
        console.log("After Each");  
    })  

    test.afterAll(async()=>{
        console.log("After All");   
    })
    test("hooks",async({page})=>{
        console.log("Inside Test");
        await page.goto("https://www.saucedemo.com/");
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
})

test("test 2",async({page})=>{
    console.log("Inside Test 2");
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})