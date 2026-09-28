import{test,expect} from "@playwright/test"

test('keyboardactions', async({page})=>{

await page.goto("https://gotranscript.com/text-compare")

const text1 = await page.locator("//textarea[@name='text1']")
const text2 = await page.locator("//textarea[@name='text2']")

//text1.fill('bhana')

await page.fill("//textarea[@name='text1']",'bana')
await page.keyboard.press('Control+A')
await page.keyboard.press('Control+C')

await page.keyboard.press('Tab')
await page.keyboard.press('Control+V')

await page.waitForTimeout(4000)
})