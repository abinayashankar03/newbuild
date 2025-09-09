import{test,expect} from '@playwright/test'

test("simple alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
//syntax
    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        expect(dialog.message('I am an alert box!'))

        await dialog.accept()
    })
    await page.click('//button[@id="alertBtn"]')
    await page.pause()
})

test("confirmation alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        dialog.dismiss()
    })
    await page.click('//button[@id="confirmBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
    await page.pause()
})

test.only('prompt alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',dialog=>{

        console.log(dialog.type())
        dialog.accept("playwright")
    })

    await page.click('//button[@id="promptBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello playwright! How are you today?')
    await page.pause()
})