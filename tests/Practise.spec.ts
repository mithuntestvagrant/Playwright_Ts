import { test, expect } from '@playwright/test';

test('practise test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.locator("//span[text()='Prime']").hover();
  await page.waitForTimeout(2000);
  

});