import { test, expect } from '@playwright/test';

test('Sauce Demo login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('#user-name');
  const password = page.locator('#password');
  const loginbutton = page.locator('#login-button');

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginbutton.click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});