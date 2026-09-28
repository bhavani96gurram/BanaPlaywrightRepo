import { test, expect } from "@playwright/test"

test('tables case', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    const table1 = await page.locator('//table[@name="BookTable"]');

    await table1.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    const rows = await table1.locator('tr')
    const columns = await table1.locator('th')

    console.log('total rows:', await rows.count(), 'total columns:', await columns.count())

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        console.log('Row', i + 1, ':', await row.textContent());
    }

    for (let j = 0; j < await columns.count(); j++) {
        const columntext = columns.nth(j);
        console.log('column:', await columntext.textContent())

    }

})

test.only('pagination table', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    const table1 = await page.locator('//table[@id="productTable"]');

    await table1.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    const rows = await table1.locator('tr')
    const columns = await table1.locator('th')

    console.log('total rows:', await rows.count(), 'total columns:', await columns.count())

    const pagenum = await page.locator("//ul[@id='pagination']/li")

    for (let b = 0; b < await pagenum.count(); b++) {
        if (b > 0) {
            await pagenum.nth(b).click()

        }
        for (let a = 0; a < await rows.count(); a++) {

            const rowcount = rows.nth(a)
            const rdata = rows.locator('td')
            // console.log(rdata.count());

            for (let c = 0; c < await rdata.count() - 1; c++) {
                const alltabledata = await rdata.nth(c).textContent();

                if (alltabledata?.match('Action Camera')) {
                    // await page.click('//td/input[@type="checkbox"]');
                    // await page.waitForTimeout(3000);
                    console.log('item present');
                }


            }
        }

    }




})