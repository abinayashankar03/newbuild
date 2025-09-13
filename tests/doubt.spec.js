import {test,expect} from "@playwright/test"

 test("automation using launch", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")
    await expect (page.locator ('//h1[contains(text(),"Automation Demo Site")]')).toHaveText("Automation Demo Site")
    //await page.locator('//img[@src="original.png"]')
    //awat page.locator ('//span[contains(text(),"Website designing")'].click

    await page.fill('//input[@placeholder="First Name"]', "Rijesh")
    await page.fill('//input[@placeholder="Last Name"]', "vengasseri")
    await page.click('//input[@value="Male"]', " Male ")
    const options=['//input[@value="Cricket"]', '//input[@value="Hockey"]']
    for (let print of options){
    await page.locator(print).check()
    }await page.locator('//div[@id="msdd"]').click()
    const lang=["//a[text()='Arabic']","//a[text()='German']","//a[text()='Romanian']"]
    for(const language of lang ){
        await page.locator(language).click()
    }

    await page.locator("//label[text()='Skills']").click()
    await page.locator('//select[@id="Skills"]').selectOption('Javascript')
    await page.locator('//select[@id="country"]').selectOption('India')

    await page.locator('(//div[@class="google-anno-skip google-anno-sc"])[2]').click()
    await page.locator('#hd-close-button').click()

    await page.pause()
})

test("file_upload", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/sabin/Downloads/gundu_image.jpeg") 
    await page.locator("//button[@type='submit' and text()='Upload Single File']").click();
    await expect(page.locator("#singleFileStatus")).toContainText("Single file selected: gundu_image.jpeg");

    await page.pause()

})

test("sample frames", async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const frame1=await page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'})
    await expect(frame1.locator('//h5[text()="Nested iFrames"]')).toHaveText('Nested iFrames')

    const frame2=await frame1.childFrames()
    await expect (frame2[0].locator('//h5[text()="iFrame Demo"]')).toHaveText('iFrame Demo')
    await frame2[0].locator('//input[@type="text"]').fill("playwright")

    await page.pause()

})

test("practise_webtable", async({page})=>{
    await page.goto("https://cosmocode.io/automation-practice-webtable/");
    const columns = await page.locator("//table[@id='countries']/tbody/tr[1]/td");
    const rows = await page.locator("//table[@id='countries']/tbody/tr");

    console.log("row count", await rows.count());
    console.log("column count", await columns.count());

    const count = await rows.count();   
    for (let i=0; i<count; i++){
        await page.locator("//input[@type='checkbox']").nth(i).check()
   }

  await page.pause();
})

//let row=rows.nth(i)
//let cell=row.locator('td').nth(0)

