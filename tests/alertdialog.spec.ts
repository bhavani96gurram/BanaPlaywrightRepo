import { test, expect } from "@playwright/test";

test ("test case 4", async({page}) =>{
await page.waitForTimeout(4000)
await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("//li/a[text()='PlaywrightPractice']").click()

 await page.on('dialog', async (dialog) =>{
expect (dialog.type()).toContain('alert')
expect (dialog.message()).toContain('I am an alert box!')
await dialog.accept()

})

await page.click("//button[@id='alertBtn']")

})


