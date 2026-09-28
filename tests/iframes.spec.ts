import {test, expect} from "@playwright/test"

test ('frame locator', async({page})=>{

await page.goto("https://ui.vision/demo/iframes")

const allframes = await page.frames().length
console.log(allframes)

const f1 = await page.frameLocator("//iframe[contains(@src,'docs.google.com')]")
await f1.locator("(//div[@class='AB7Lab Id5V1'])[1]").click()

await page.waitForTimeout(4000)

})

