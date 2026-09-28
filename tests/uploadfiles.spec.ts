import{test, expect} from "@playwright/test"

test('uploadfiles', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")


const singleupload = await page.locator("//input[@id='singleFileInput']")
await singleupload.scrollIntoViewIfNeeded()
await page.waitForTimeout(5000)

await singleupload.click()
await singleupload.setInputFiles("tests/file-sample_150kB.pdf")

await page.waitForTimeout(5000)

})

test.only('multiplefiles', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const multipleFilesInput = await page.locator("//input[@id='multipleFilesInput']")
await multipleFilesInput.scrollIntoViewIfNeeded()
await page.waitForTimeout(5000)

await multipleFilesInput.click()
await multipleFilesInput.setInputFiles(['tests/file-sample_150kB.pdf','tests/secondfile.pdf'])

await page.waitForTimeout(4000)


})