import {test,expect} from '@playwright/test'

test("radiobutton",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="male"]').check()
    await expect(page.locator('//input[@id="male"]')).toBeChecked()
    await expect (page.locator('//input[@id="female"]')).not.toBeChecked()

    await page.pause()
})


test("single select checkbox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="sunday"]').check()
    await expect(page.locator('//input[@id="sunday"]')).toBeChecked()
   
    await page.locator('//input[@id="sunday"]').uncheck()
    await expect(page.locator('//input[@id="sunday"]')).not.toBeChecked()

    await page.pause()
})

test("multi select",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const locat=['//input[@id="sunday"]','//input[@id="tuesday"]','//input[@id="friday"]']

    for(let print of locat){
        await page.locator(print).check()
        await expect(page.locator(print)).toBeChecked()
    }

    await page.pause()
})