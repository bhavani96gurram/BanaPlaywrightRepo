import {test, expect} from "@playwright/test"

test ('paginationtest', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const table = page.locator('//table[@id="productTable"]');
    await table.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
 
    //Rows and columns
    const rows = table.locator('tr');
    const columns = table.locator('tr th');
    console.log('Total Rows:', await rows.count());
    console.log('Total Columns:', await columns.count());
 
    const pages = await page.locator('//ul[@id="pagination"]/li');
    console.log('Total Pages:', await pages.count());
 
    for (let p = 0; p < await pages.count(); p++) {
        await pages.nth(p).click();
        await page.waitForTimeout(2000);
        console.log('Page:', p + 1);
 
        const checkboxes = table.locator('//td/input[@type="checkbox"]');
 
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
 
            for (let j = 0; j < await tds.count(); j++) {
 
                console.log('Column', j + 1, ':', await tds.nth(j).textContent());
 
                if (await tds.nth(j).textContent() === 'Action Camera') {
                    await checkboxes.nth(j + 1).click();
                    await page.waitForTimeout(2000);
                }
            }
        }
    }

})


test('pagination', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    const table = await page.locator("//table[@id='productTable']")

    await table.scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    const pagenumbers = await page.locator("//ul[@id='pagination']/li")

    const rows = table.locator('tr')
    const columns = table.locator('tr th')
    
    for(let i=0;i< await rows.count(); i++){
    console.log('rows' , await rows.count(), 'columns', await columns.count())

    const totalrows = rows.nth(i);
    console.log('total rows:',await totalrows.textContent())



    }


})