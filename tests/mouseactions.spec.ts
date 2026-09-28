import { test, expect } from "@playwright/test"

test('mousehover', async ({ page }) => {

    await page.goto("https://demo.opencart.com/")


    const component = await page.locator("//a[text()='Components']")
    await component.hover()
    await page.waitForTimeout(3000)

    await component.click({ button: 'right' })
    //await component.dblclick()
    //await component.dragTo()


})

test('mouseclick', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    // const btn = await page.locator("//button[text()='Point Me']")
    // await btn.scrollIntoViewIfNeeded()
    // await page.waitForTimeout(3000)

    // await btn.hover()

    // const mobilebtn = await page.locator("//a[text()='Mobiles']")
    // await mobilebtn.click()

    // await page.waitForTimeout(3000)


    const field1 = await page.locator("//input[@id='field1']")
    const field2 = await page.locator("//input[@id='field2']")
    const copytxtbtn = await page.locator("//button[text()='Copy Text']")


    await copytxtbtn.scrollIntoViewIfNeeded()

    await field1.fill('hello bobby')
    const field1text = await field1.getAttribute('value')

    await copytxtbtn.dblclick()
    await page.waitForTimeout(3000)
    const field2text = await field2.getAttribute('value')

    //await expect(field1text==field2text)
        console.log( field1text)

    if (await field1text == await field2text) {
        console.log( field1text)

    }
    else {

        console.log('text not found')
    }


})

test.only('draganddrop', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

const source = await page.locator("//div[@id='draggable']")
source.scrollIntoViewIfNeeded();

const destination = await page.locator("//div[@id='droppable']")
const destcheck = destination.getAttribute('value')
await source.dragTo(destination)
await page.waitForTimeout(3000)


})