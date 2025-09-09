import {test,expect} from '@playwright/test'

test.beforeAll("started a test",()=>{
    console.log("Test has been started")
})
test.beforeEach("visiting the url",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
})

test("login1",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('//input[@id="login-button"]').click()

})
test("login2",async({page})=>{

        await page.locator('//input[@id="user-name"]').fill("problem_user")
        await page.locator('//input[@id="password"]').fill('secret_sauce')
        await page.locator('//input[@id="login-button"]').click()
})
test("login3",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill('performance_glitch_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('//input[@id="login-button"]').click()
})
test.afterEach("logout",async({page})=>{
    await page.locator('//button[text()="Open Menu"]').click()
    await page.locator('//a[@id="logout_sidebar_link"]').click()
})
test.afterAll("test ended",()=>{
    console.log("Test succesfully executed")
})