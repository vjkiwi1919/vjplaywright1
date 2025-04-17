class Shopping {

    constructor(page){

        this.page = page; 
        this.Shop = page.getByRole('link', { name: 'Shop', exact: true })
        this.Load = page.waitForLoadState('networkidle', { timeout: 70000 }); 
        this.Frogs = page.locator('#product-2').getByRole('link', { name: 'Buy' }, { timeout: 70000 })
        
                  
    }
    
    async checkValidation(name,email,message,confirmation) 
 {  
    await this.page.waitForLoadState();
    await this.Shop.click(); 
    await this.Load

    
     //await this.Frogs.Click();
     await this.Frogs.waitFor({ state: 'visible' });
     await this.page.pause()
     
    await this.Frogs.Click();
            
 }

}
module.exports = {Shopping};