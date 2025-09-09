import {test,expect} from '@playwright/test'
import Orange from './json/orangehrm'

// const {test,expect} =require('@playwright/test')

test("login orangehrm using pom",async({page})=>{

    await page.setViewportSize({ width: 375 , height: 667 })

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const log= new Orange(page)

    await log.login("Admin","admin123")

    await page.pause()

    
})