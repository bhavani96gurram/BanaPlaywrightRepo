import { test, expect, chromium } from "@playwright/test"

test('windowhandle', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parent = await context.newPage();

    await parent.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await parent.fill("//input[@name='username']", 'Admin')
    await parent.fill("//input[@name='password']", 'admin123')
    await parent.click("//button[@type='submit']")

    //await parent.waitForLoadState("networkidle");

    const pp = parent.waitForEvent("popup");

    await parent.click("//a[@target='_blank' and @class='orangehrm-upgrade-link']");

    const child = await pp;

    //await child.waitForLoadState("domcontentloaded");
    await child.waitForTimeout(4000)

    console.log("Child URL:", child.url());

    await child.fill("//input[@id='Form_getForm_FullName']", 'bana')
    await child.waitForTimeout(4000)






})