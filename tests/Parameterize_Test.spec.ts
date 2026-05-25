import { test, expect } from '@playwright/test';

const testData = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  {
    username: 'problem_user',
    password: 'secret_sauce',
  },
];

for (const data of testData) {
  test(`Parameterized test - ${data.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', data.username);
    await page.fill('[data-test="password"]', data.password);
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL(/inventory/);

    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
}