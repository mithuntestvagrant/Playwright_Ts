import { test, expect } from '@playwright/test';
import testData from '../test_data/qa/test.json';

for (const user of Object.values(testData)) {   // Loop through each user in the test data and create a test for each one.
  test(`Login test for ${user.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', user.username);
    await page.fill('[data-test="password"]', user.password);
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL(/inventory/);
  });
}