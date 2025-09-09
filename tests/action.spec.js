import{test,expect} from '@playwright/test'

test("keyboard_action",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.locator('//textarea[@name="text1"]').fill("playwright")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')//ArrowUp
    await page.locator('//button[@id="recaptcha"]').click()

    await page.pause()

})

test("mouse_hover",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//button[@class="dropbtn"]').hover()
    await page.pause()
})

test("double_click",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('//input[@id="field1"]','playwright')

    await page.locator('//button[text()="Copy Text"]').dblclick()

    await expect(page.locator('//input[@id="field2"]')).toHaveValue('playwright')

    await page.pause()
})

test("rightclick",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    await page.locator('//span[@class="context-menu-one btn btn-neutral"]').click({button:'right'})

    await page.pause()
})

test("wheel",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.mouse.wheel(0,3000)

    await page.pause()
})


test.only("drag and drop",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const drag=await page.locator('//div[@id="draggable"]')
    const drop=await page.locator('//div[@id="droppable"]')

    await drag.dragTo(drop)
    await page.pause()
})
