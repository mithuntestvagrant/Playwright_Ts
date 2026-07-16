import { test, expect } from '@playwright/test';

test('capture screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');



const username = page.locator('[data-test="username"]');
const password = page.locator('[data-test="password"]');
const loginButton = page.locator('[data-test="login-button"]');

await username.fill('standard_user');
await password.fill('secret_sauce');
await loginButton.click();
//====element screenshot

//await page.getByAltText('Sauce Labs Backpack').screenshot({ path: './screenshots/Elementscreenshot.png' });

//===page screenshot

//await page.screenshot({ path: './screenshots/PageScreenshot.png' });

//=======full screeshot

await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true });


});