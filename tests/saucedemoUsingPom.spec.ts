import{test,expect} from "@playwright/test";
import{sauceLoginPage} from "../pages/sauceLoginPage";
import{sauceCartPage} from "../pages/sauceCartPage";
import{sauceCheckoutPage} from "../pages/sauceCheckoutPage";

test.describe("SauceDemo Test Suite",()=>{
    let loginPage:sauceLoginPage;
    let cartPage:sauceCartPage;
    let checkoutPage:sauceCheckoutPage;
    
    test.beforeEach(async({page})=>{            

        loginPage=new sauceLoginPage(page);
        cartPage=new sauceCartPage(page);
        checkoutPage=new sauceCheckoutPage(page);

        await loginPage.goto();
        await loginPage.login("standard_user","secret_sauce");
    });

    test("Add product to cart and verify",async()=>{
        await cartPage.AddToCart();
        await cartPage.CartBox();
    });

    test("Checkout flow",async()=>{
        await cartPage.AddToCart();
        await cartPage.CartBox();

        await checkoutPage.checkout();
        await checkoutPage.fillCheckoutInformation("John","Doe","560001");
        await checkoutPage.continueCheckout();
        await checkoutPage.finishCheckout();
    });
});


