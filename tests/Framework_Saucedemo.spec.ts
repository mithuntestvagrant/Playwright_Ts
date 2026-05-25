import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let loginPage: LoginPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.describe('SauceDemo End-to-End Flow', () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.verifyLoginSuccess();
  });

  test('Add product to cart and verify', async () => {
    await cartPage.AddToCart();
    await cartPage.BoxCartButton();
    await cartPage.VerifyAddToCart();
  });

  test('Checkout flow', async () => {
    await cartPage.AddToCart();
    await cartPage.BoxCartButton();

    await checkoutPage.Checkout();
    await checkoutPage.FillCheckoutInformation(
      'John',
      'Doe',
      '560001'
    );

    await checkoutPage.ContinueCheckout();
  });

});