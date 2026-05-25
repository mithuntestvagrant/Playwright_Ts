import { test, expect } from '../fixtures/customfixtures';

test.describe('SauceDemo Flow', () => {

  test('login + add to cart + checkout', async ({ loginPage, cartPage, checkoutPage }) => {

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await cartPage.AddToCart();
    await cartPage.BoxCartButton();

    await checkoutPage.Checkout();
    await checkoutPage.FillCheckoutInformation('John', 'Doe', '560001');
    await checkoutPage.ContinueCheckout();
  });

});