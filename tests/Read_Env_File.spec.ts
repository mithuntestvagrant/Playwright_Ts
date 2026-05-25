import { test, expect } from '@playwright/test';

test('Read Env File', async ({ page }) => {

  await page.goto(`${process.env.Sauce_Demo_Url}`);
  

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Verify login
  await expect(page).toHaveURL(/inventory/);


  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  // Add product to cart
  //await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Verify cart count
  //await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});