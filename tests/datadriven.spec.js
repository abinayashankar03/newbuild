import{test,expect} from '@playwright/test'
import login from './json/login.json'

test("login swaglabs",async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/index.html')

    await page.locator('//input[@id="user-name"]').fill(login.username)
    await page.locator('//input[@id="password"]').fill(login.password)
    await page.locator('//input[@id="login-button"]').click()

})