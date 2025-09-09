import {test,expect, chromium} from '@playwright/test'

test("multiple_tab",async({page})=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page1.title())
    await page1.waitForTimeout(3000)


    await page2.goto("https://testautomationpractice.blogspot.com/")
    console.log(await page2.title())
    await page2.waitForTimeout(3000)
})

test("handle multiple tab",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(5000)
    console.log(await page.title())

    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])

    await newTab.waitForLoadState();
    console.log(await newTab.title())

})


test("page_navigation",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(5000)

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(5000)

    await page.goBack()

    await page.goForward()
})

