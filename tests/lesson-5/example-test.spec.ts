import { test } from "@playwright/test";

test("testcase name", async ({page}) => {
    await test.step("navigate to register page", async() => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html")
    });
    await test.step("fill form", async()=>{
        await page.locator("//div")
    });
})