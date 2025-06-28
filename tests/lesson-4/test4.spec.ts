import {test} from '@playwright/test';

test('bai tap 4', async ({ page }) => {
    await test.step("go to web", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("click on bài học 4", async () => {
        await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
    });
    await test.step("add 10 notes", async () => {
        
    });
})