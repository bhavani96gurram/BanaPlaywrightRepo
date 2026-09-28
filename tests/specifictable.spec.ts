import{test, expect} from "@playwright/test"

test('tables', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

const table = await page.locator("//table[@name='BookTable']")

await table.scrollIntoViewIfNeeded()

const rows = await table.locator("tr")
const rownumbers = await page.locator("//table[@name='BookTable']//tbody//tr[1]//following-sibling::tr[1]//td[1]")
// for (let i=0; i< await rownumbers.count(); i++){

// const rds = await rownumbers.nth(i)
// console.log(await rds.textContent())

// }


for (let i = 0; i <= await rows.count(); i++) {
    const row = page.locator(
        `//table[@name='BookTable']//tbody//tr[${i}]//td`)

    console.log(`Row ${i}:`, await row.textContent())
}














})