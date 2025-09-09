import{test,expect} from '@playwright/test'

test.describe("group1",()=>{
    test("one",()=>{
        console.log("one")
    })
    test("two",()=>{
        console.log("two")
    })
    test("three",()=>{
        console.log("three")
    })

})
test.describe("group2",()=>{
    
    test("four",()=>{
        console.log("four")
    })
    test("five",()=>{
        console.log("five")
    })
})