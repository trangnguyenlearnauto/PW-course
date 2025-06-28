import {test} from '@playwright/test';

test('bai tap 3', async ({ page }) => {
    await test.step("go to web", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("click on bài 3", async () => {
        await page.locator("//a[contains(text(),'Bài học 3: Todo page')]").click();
    });
    await test.step("add 100 tasks", async () => {
        // chạy vòng lặp for 100 lần để add 100 task
        const taskName = page.locator("//input[@id='new-task']");
        const buttonAdd = page.locator("//button[@id='add-task']");
        for (let i = 1; i <= 100; i++) {
            await taskName.fill(`Todo ${i}`);
            await buttonAdd.click();
        }
    });
    await test.step("xóa todo số lẻ", async () =>{
        const deleteButton = page.locator("")
    })
})