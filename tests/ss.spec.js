import{test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.screenshot({path:"tests/screenshot/"+"automation.png"})
    //await page.screenshot({path:"tests/screenshot/"+"automation_fullpage.png",fullPage:true})
    await page.locator('//div[@id="HTML15"]').screenshot({path:"tests/screenshot/"+"upload_file.png"})
})