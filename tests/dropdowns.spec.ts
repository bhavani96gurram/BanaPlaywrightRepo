import {test, expect} from "@playwright/test"

test('dropdown', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const dropdwns = await page.locator("//select[@id='country']")

await dropdwns.scrollIntoViewIfNeeded()

await dropdwns.selectOption({label:'India'})

await dropdwns.selectOption("Canada")

await dropdwns.selectOption({value:'usa'})
await page.waitForTimeout(2000)

await dropdwns.selectOption({index:6})

})

test.only('dropdown list', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")


let gen = "female"
const gender = await page.locator(`//input[@id='${gen}']`)
await gender.scrollIntoViewIfNeeded()

const dd1= await page.locator("//select[@id='country']")
const dropdwns = await page.$$("//select[@id='country']/option")

await page.waitForTimeout(2000)

console.log(dropdwns.length)

for(const drd of dropdwns)
{

const dd = await drd.textContent()

if(dd?.includes('germany'))
{
await page.waitForTimeout(5000)

await dd1.selectOption({value:'germany'})

//await page.selectOption('#country', 'germany')
await page.waitForTimeout(2000)

await expect(drd.isVisible()).toBeTruthy()
}

}








})