import {test, expect} from "@playwright/test"

test('radiobuttons', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

let gen = "female"
const gender = await page.locator(`//input[@id='${gen}']`)

await gender.scrollIntoViewIfNeeded()

await gender.check()

await page.waitForTimeout(4000)

await expect(gender).toBeChecked()

await expect(gender.isChecked()).toBeFalsy()

}) 
