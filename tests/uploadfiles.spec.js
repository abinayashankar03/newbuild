import {test,expect} from '@playwright/test'

test("uploading a file",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//input[@id="singleFileInput"]').setInputFiles('tests/screenshot/upload_file.png')

    await page.locator('//button[@type="submit" and text()="Upload Single File"]').click()

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText('Single file selected: upload_file.png')

    await page.pause()
})

test.only("uploading multiple file",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["tests/screenshot/upload_file.png","tests/screenshot/automation.png"])

    await page.locator('//button[@type="submit" and text()="Upload Multiple Files"]').click()

    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('Multiple files selected:upload_file.png')

    await page.pause()
})