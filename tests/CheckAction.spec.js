import { test, expect } from "@playwright/test";

test("Check Action", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    await page.waitForTimeout(2000);
    await page.check("//input[1]");
    await page.waitForTimeout(2000);
    // await page.uncheck("//input[1]");
    // await page.waitForTimeout(2000);
});

test("UnCheck Action", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    await page.waitForTimeout(2000);
    await page.uncheck("//input[2]");
    await page.waitForTimeout(2000);
    // await page.check("//input[2]");
    // await page.waitForTimeout(2000);
});
