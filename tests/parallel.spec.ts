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

});