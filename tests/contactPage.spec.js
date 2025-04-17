const { test, expect, request } = require('@playwright/test');
const {ContactPage}=require('../pageobject/ContactPage')

test('Test Case 1', async ({ page }) => {

    await page.goto("http://jupiter.cloud.planittesting.com");     

     const name="vijay"
     const email="vjkiwi@gmail.com" 
     const message="Automation test" 
    
     const contactPage=new ContactPage(page);
     contactPage.checkValidation(name,email,message)
     contactPage.assersion()     
     
});

