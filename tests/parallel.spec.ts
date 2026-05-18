import { test } from "@playwright/test";

test.describe("Parallel Tests", () => {

  test.describe.configure({ mode: "parallel" });

  test("Test A", async ({ page }) => {
    console.log("Running Test A");
  });

  test("Test B", async ({ page }) => {
    console.log("Running Test B");
  });

  test("Test C", async ({ page }) => {
    console.log("Running Test C");
  });
  test("Test D", async ({ page }) => {
    console.log("Running Test D");
  });
test("Test E", async ({ page }) => {
    console.log("Running Test E");
  });

});
