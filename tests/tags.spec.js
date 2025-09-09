import {test,expect} from '@playwright/test'

test("test 1  @smoke",()=>{
    console.log("test 1 executed")
})

test("test 2 @smoke",()=>{
    console.log("test 2 executed")
})

test("test 3 @reg",()=>{
    console.log("test 3 executed")
})

test("test 4 @reg",()=>{
    console.log("test 4 executed")
})

test("test 5 @smoke @reg",()=>{
    console.log("test 5 executed")
})



// npx playwright test tags.spec.js --grep "@smoke" --project chromium 
//npx playwright test tags.spec.js --grep-invert "@reg" --project chromium 