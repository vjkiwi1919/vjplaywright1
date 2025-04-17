const { test, expect, request } = require('@playwright/test');
const {Shopping} = require('../pageobject/Shopping')

//const {LoginPagesubmit} = require('../pageobject/LoginPagesubmit')


test('Test Case 1', async ({ page }) => {

    await page.goto("http://jupiter.cloud.planittesting.com");  
    
    
     const shopping=new Shopping(page);
     shopping.checkValidation();
     page.locator('#product-2').getByRole('link', { name: 'Buy' }).click()
      
});