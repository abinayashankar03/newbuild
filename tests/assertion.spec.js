import{test,expect} from '@playwright/test'

test("built-in assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect(page.locator('//h1[@class="title"]')).toBeVisible()
    await expect(page.locator("//a[text()='GUI Elements']")).toHaveText("GUI Elements")
    await expect(page.locator("//a[text()='GUI Elements']")).toContainText("GUI")
    await expect(page.locator('//input[@id="name"]')).toBeEmpty()
    await page.locator('//input[@id="name"]').fill("playwright")
    await expect(page.locator('//input[@id="name"]')).toHaveValue("playwright")
    await expect(page.locator('//input[@id="name"]')).not.toBeEmpty()
})