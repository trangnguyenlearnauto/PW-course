import {test} from '@playwright/test';
// bài này chưa làm xong, mình sẽ làm lại cách khác và gửi lại
test('bai tap 2a', async ({ page }) => {
    await test.step("go to web", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step("click on bài tập 2", async() => {
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    })
    await test.step("add 2 product 1", async () => {
        await page.locator("//div[@class='product-name' and text()='Product 1']/following-sibling::div/following-sibling::button").click()
        await page.locator("//div[@class='product-name' and text()='Product 1']/following-sibling::div/following-sibling::button").click()
    })

})

test('bai tap 2b', async ({ page }) => {
    await test.step("go to web", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step("click on bài tập 2", async() => {
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    })
    await test.step("add 3 product 2", async () => {
        await page.locator("//div[@class='product-name' and text()='Product 2']/following-sibling::div/following-sibling::button").click();
        await page.locator("//div[@class='product-name' and text()='Product 2']/following-sibling::div/following-sibling::button").click();
        await page.locator("//div[@class='product-name' and text()='Product 2']/following-sibling::div/following-sibling::button").click();
    })

})
