import { test, expect } from "@playwright/test";

test("Action", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(3000);
    await page.click("//a[normalize-space()='Get started']");
    await page.waitForTimeout(2000);
});
