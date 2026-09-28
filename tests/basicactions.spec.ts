import { test, expect } from "@playwright/test";
test('2nd test case', async({page})=> {
await page.goto("https://www.redbus.com/")
const bookyourjrny = await page.locator("//div[@class='hero-wrapper']/div/h1")
let pagetitle = await bookyourjrny.textContent()
console.log(pagetitle)
await expect(bookyourjrny).not.toContainText(/Book/)


await page.click("//div/input[@id='src']")
await page.fill("//div/input[@id='src']", "Hyderabad")
await page.waitForTimeout(3000)
await 


});