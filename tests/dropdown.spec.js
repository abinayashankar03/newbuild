import {test,expect} from '@playwright/test'

test("single select dropdown",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('//select[@id="country"]').selectOption('Germany')
    await page.locator('//select[@id="country"]').selectOption({value:"germany"})
    await page.locator('//select[@id="country"]').selectOption({index:3})

    await page.pause()
})

test("multiselect",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//select[@id="colors"]').selectOption(["Blue","White"])

    await page.pause()
})
test("suggestion dropdown",async({page})=>{
    await page.goto('https://www.google.com/')

    await page.locator('//textarea[@class="gLFyf"]').fill('india')
    const locat=await page.locator('//div[@class="eIPGRd"]')
    await locat.first().waitFor()
    const text=await locat.allTextContents()

    for(let i=0;i<text.length;i++){
        let etext=await text[i]
        if(etext.includes("India") && etext.includes("Country in South Asia")){
            await locat.nth(i).click()
        }
    }

    await page.pause()
})