import {test,expect} from '@playwright/test'

test("iframes",async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // const locat=await page.frames()
    // console.log("count of frame :",locat.length)

    // for(let URL of locat){
    //     console.log("frame url :",URL.url())
    // }

    const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    // const frame1=await page.frame({name:"ui-vision-1"})
    // const frame2=await page.frame("ui-vision-1")
    // const frame3=await page.frameLocator('//iframe[@id="demo-vision"]')

    await frame.fill('//input[@name="mytext1"]','playwright')
    // await frame.locator('//input[@name="mytext1"]').fill("playwright")

    await page.pause()
})

test("nested frame",async({page})=>{
   await page.goto('https://ui.vision/demo/webtest/frames/')
   
   const fram=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})

   await fram.locator('//input[@name="mytext3"]').fill("playwright")

   const child=await fram.childFrames()
   await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()

   await page.pause()
})