import{test, expect} from "@playwright/test"

test('screenshot', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.click("//input[@id='name']")

await page.fill("//input[@id='name']", 'Baana')

await page.type("//textarea[@id='textarea']", 'Bobby')

//await page.screenshot({path: 'tests/screenshots'+Date.now()+'addressinput.png'})

//await page.locator("//input[@id='singleFileInput']").screenshot({path: 'tests/screenshots'+Date.now()+'inputfile.png'})

})