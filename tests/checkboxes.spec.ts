import {test, expect} from "@playwright/test"

test('checkboxes', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const day = 'sunday'
const days = await page.locator(`//input[@id='${day}']`)
await days.scrollIntoViewIfNeeded()
await days.check()

await expect(days).toBeChecked()
await expect(days.isChecked()).toBeTruthy()


})

test.only('handling multiple checkboxes', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const days = await page.locator("//label[text()='Days:']")

await days.scrollIntoViewIfNeeded()

const weeklist = ['sunday','monday','saturday','friday']

for(const chk of weeklist)
{
const checkbox = page.locator(`//input[@type='checkbox' and @id='${chk}']`);
await checkbox.check()
await page.waitForTimeout(2000)
await expect(checkbox.isChecked()).toBeTruthy()

if(chk=='friday' || chk =='saturday')
{
    await checkbox.uncheck()
    await page.waitForTimeout(3000)
}


}








})