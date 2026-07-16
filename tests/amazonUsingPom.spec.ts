import{test,expect} from "@playwright/test"
import { search } from "../pages/search"
import { amazonCart } from "../pages/amazonCart"



test.describe("Amazon Automation", () => {

    let searchPage: search;

    test.beforeEach(async ({ page }) => {
        searchPage = new search(page);
    });

    test("Search and Add Product to Cart", async ({ page }) => {

        await searchPage.goto();

        await searchPage.textBox("iphone");

        // // Wait for new tab
        // const [newPage] = await Promise.all([
        //     page.context().waitForEvent("page"),
        //     searchPage.searchButton(),
        // ]);

        //await newPage.waitForLoadState();

        // const cartPage = new amazonCart(newPage);

        
        const cartPage = new amazonCart(page)

        await cartPage.cartClick();

        await cartPage.boxClick();

        await cartPage.buyClick();

    });

});