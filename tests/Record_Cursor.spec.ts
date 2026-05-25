import { test, expect } from '@playwright/test';

test('login and add product to cart', async ({ page }) => {

  // Open application
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');

  // Add product to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Verify cart badge count
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Open cart
  await page.click('.shopping_cart_link');

  // Verify cart page
  await expect(page.locator('.title')).toHaveText('Your Cart');
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();

});