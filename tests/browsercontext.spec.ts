import{test, expect, chromium} from "@playwright/test"

test('browsercontext', async()=>{

const browser = await chromium.launch()

const context = await browser.newContext()

const page1 = await context.newPage()

const page2 = await context.newPage()

await page1.goto("https://testautomationpractice.blogspot.com/")
await page2.goto("https://www.pavanonlinetrainings.com/")

await page1.click("//input[@id='name']")
await page1.waitForTimeout(3000)
await page2.click("//a[text()='Home' and @class='nav-link active']")
await page1.waitForTimeout(3000)







})