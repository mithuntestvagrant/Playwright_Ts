import { test, expect } from '@playwright/test';

test('capture screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

//element screenshot

//await page.getByAltText('Sauce Labs Backpack').screenshot({ path: './screenshots/Elementscreenshot.png' });

//page screenshot

//await page.screenshot({ path: './screenshots/PageScreenshot.png' });

//full screeshot

await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true });


});