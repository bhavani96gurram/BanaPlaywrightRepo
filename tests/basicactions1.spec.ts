import { test, expect} from "@playwright/test"
test('first test case', async({ page })=> {
await page.goto("https://www.redbus.com/");
const pagetitle= await page.title();
console.log(pagetitle);
await expect(page).toHaveTitle(/Book/);




});