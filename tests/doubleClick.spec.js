import { test, expect } from "@playwright/test";

test("Double Click Action", async ({ page }) => {
    await page.goto("https://testkru.com/Elements/Buttons");
    await page.waitForTimeout(3000);
    await page.dblclick("//button[@id='doubleClick']");
    await page.waitForTimeout(2000);
});
