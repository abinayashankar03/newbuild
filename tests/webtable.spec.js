import{test,expect} from '@playwright/test'

test("webtable",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const column=await page.locator('//table[@id="productTable"]/thead/tr/th')
    const rows=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("column count : " , await column.count())
    console.log("rows count : ",await rows.count())

//single checkbox

    // const check=await rows.filter({
    //     has:page.locator('td'),
    //     hasText:"Smartphone"
    // })

    // await check.locator('//input[@type="checkbox"]').check()

//multiple checkboxes

    // const check=await rows.filter({
    //     has:page.locator('td'),
    //     hasText: /Smartphone|Tablet|Wireless Earbuds/
    // })
    // const count=await check.count()
    // for(let i=0;i<count;i++){
    //     await check.nth(i).locator('//input[@type="checkbox"]').check()
    // }

//all checkboxes

    const check=await rows.filter({
        has:page.locator('td')
    })
    const count=await check.count()
    for(let i=0;i<count;i++){
        await check.nth(i).locator('//input[@type="checkbox"]').check()
        const text=await check.nth(i).locator('td:nth-child(3)').textContent()
        console.log("Price :", await text)
    }

    await page.pause()
})