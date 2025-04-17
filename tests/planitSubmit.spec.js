const { test, expect, request } = require('@playwright/test');
const {SubmitPage} = require('../pageobject/SubmitPage')


test('Test Case 1', async ({ page }) => {

    await page.goto("http://jupiter.cloud.planittesting.com");     

     const name = "vijay";
     const email ="vjkiwi@gmail.com" 
     const message ="Automation test"
     
    
     const submitPage=new SubmitPage(page);
     submitPage.checkValidation(name,email,message);      
      
});