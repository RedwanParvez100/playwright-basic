import { test, expect } from "@playwright/test";
import path from "path";

test("Type Action", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    await page.waitForTimeout(3000);
    await page.type(
        "//input[@placeholder='What needs to be done?']",
        "hello playwright",
        { delay: 200 }
    );
    await page.waitForTimeout(2000);
});

test("Fill & Presskey Action", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    await page.waitForTimeout(3000);
    await page.fill(
        "//input[@placeholder='What needs to be done?']",
        "hello playwright by Press-key"
    );
    await page.waitForTimeout(2000);
    await page.press("//input[@placeholder='What needs to be done?']", "Enter");
    await page.waitForTimeout(3000);
});

test("Select Action", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.waitForTimeout(3000);
    await page.selectOption("#dropdown", "2");
    await page.waitForTimeout(2000);
    // await page.selectOption("#dropdown", "1");
    // await page.waitForTimeout(2000);
});

test("Hover Action", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(2000);
    await page.hover("//a[@class='getStarted_Sjon']");
    await page.waitForTimeout(2000);
});

test("Drag & Drop Action", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.waitForTimeout(2000);
    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
    await page.waitForTimeout(3000);
    await page.dragAndDrop("//div[@id='column-b']", "//div[@id='column-a']");
    await page.waitForTimeout(3000);
});

test("Screenshot Action", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(2000);
    await page.screenshot({ path: "Image1.png" });
    await page.waitForTimeout(2000);
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.screenshot({ path: "Image2.png" });
    await page.waitForTimeout(2000);
});
