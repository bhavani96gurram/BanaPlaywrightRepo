import {test, expect} from "@playwright/test"

test.skip("cd test", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

await page.on('dialog', async(dialog)=>{

await expect(dialog.type()).toContain("confirm")
await expect(dialog.message()).toContain("Press a button!")
await dialog.accept()

})
await page.locator("//button[@id='confirmBtn']").click()
})



test.only('prompt test', async({page})=>{
    await page.waitForTimeout(4000)
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

await page.locator("//input[@id='username']").fill('test')

await page.on('dialog', async(dialog)=>{
await expect(dialog.type()).toContain('prompt')
await expect(dialog.message()).toContain('Please enter your name:')
await dialog.accept('test')


})
await page.locator("//button[@id='promptBtn']").click()




})