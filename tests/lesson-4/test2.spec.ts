import {test} from '@playwright/test';
// bài này chưa làm xong, mình sẽ làm lại cách khác và gửi lại
test('bai tap 2a', async ({ page }) => {
    await test.step("go to web", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("click on bài tập 2", async() => {
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    });
    await test.step("add 2 product 1", async () => {
        // dùng click count
        await page.locator("//div[@class='product-name' and text()='Product 1']/following-sibling::div/following-sibling::button").click({
            clickCount: 2
        });
    });
    await test.step("click on bài tập 2", async() => {
        await page.locator("//div[@class='product-name' and text()='Product 2']/following-sibling::div/following-sibling::button").click({
            clickCount: 3
        });
    });
    await test.step("add 1 product 3", async () => {
        await page.locator("//div[@class='product-name' and text()='Product 3']/following-sibling::div/following-sibling::button").click();
    });
 //button[@data-product-id='3']
})
