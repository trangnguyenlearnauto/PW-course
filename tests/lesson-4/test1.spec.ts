import {test} from '@playwright/test';
import { title } from 'process';

test('bai tap 1', async ({ page }) => {
    await test.step("go to web", async () => {
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step("click on Register Page", async () => {
        await page.locator("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]").click()
    });
    await test.step("fill the form", async () => {
        await page.locator("//input[@id='username']").fill('Trang');
        await page.locator("//input[@id='email']").fill('trang@gmail.com');
        await page.locator("//input[@id='female']").click();
        await page.locator("//input[@id='traveling']").click();
        await page.locator("//option[@value='music']").click();
        await page.locator("//select[@id='country']").click();
        await page.locator("//select[@id='country']").selectOption('uk');
        await page.locator("//input[@id='dob']").pressSequentially("01/25/1998");
        //await page.locator("//input[@id='profile']").setInputFiles("test-data\image1.png");
        await page.locator("//textarea[@id='bio']").fill('hi my name is Trang');
        await page.locator("//input[@id='newsletter']").click();
        //await page.locator("//input[@id='toggleOption']").check();
    });
    await test.step("ratingUs", async() => {
        let x, y;
        const rateUsBoundingbox = await page.locator("//input[@id='rating']").boundingBox();
        console.log(rateUsBoundingbox);
        if (rateUsBoundingbox) {
            x = rateUsBoundingbox.width / 1.25;
            y = rateUsBoundingbox.height / 1.25;
        }
        await page.locator("//input[@id='rating']").click({
            position: {
                x: x,
                y: y
            }
        })
        
    })
    await test.step("ratingStar", async() => {
        let x, y;
        const rateStarBoundingbox = await page.locator("//div[@id='starRating']").boundingBox();
        console.log(rateStarBoundingbox);
        if (rateStarBoundingbox) {
            x = rateStarBoundingbox.width / 1.25;
            y = rateStarBoundingbox.height / 1.25;
        }
        await page.locator("//div[@id='starRating']").click({
            position: {
                x: x,
                y: y
            }
        })
        
    })
    await test.step("Click register", async() => {
        await page.locator("button[type='submit']").click()
    })
});