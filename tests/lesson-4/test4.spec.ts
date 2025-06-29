import {test} from '@playwright/test';

test ("Add personal note", async({page}) =>{
    let titles: string[] = [];
    let contents: string[] = [];
    await test.step("vao trang VNexpress lay data", async() =>{
        await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe', {waitUntil: 'domcontentloaded'});
        titles = await page.locator('//h3[@class= "title-news"]/a').allTextContents();
        contents = await page.locator('//p[@class="description"]/a').allTextContents();
    })
    await test.step("Vào PlaywrightVN ->lesson3", async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(text(),"Bài học 4: Personal notes")]').click();
    })
    await test.step("thêm 10 note mới", async() => {
        for (let i = 0; i <10; i++) {
            await page.locator("//input[@id='note-title']").fill(titles[i]);
            await page.locator("//textarea[@id='note-content']").fill(contents[i]);
            await page.locator("//button[@id='add-note']").click();
        }
    })
    await test.step("thực hiện search theo tên tiêu đề bất kì", async() => {
        await page.locator("//input[@id='search']").fill("khoa");
    })
})