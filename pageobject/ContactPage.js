const {expect} = require('@playwright/test');
class ContactPage {

    constructor(page){

        this.page=page; 
        this.Contactlink=page.getByRole('link', { name: 'Contact' })
        this.Submit=page.getByRole('link', { name: 'Submit' })
        this.Name=page.locator("#forename");
        this.Email=page.locator("[name='email']");
        this.Text=page.getByRole('textbox', { name: 'Message *' })
        this.assert=(page.locator('#header-message'))                   
    }

    assersion(){

        expect(page.locator('#header-message')).toContainText('We welcome your feedback - but we won\'t get it unless you complete the form correctly.');
    }
    
    async checkValidation(name,email,message) 
 {     
    await this.Contactlink.click();
    await this.Submit.click(); 
    await this.Name.fill(name);
    await this.Email.fill(email);
    await this.Text.fill(message);      

 }

}
module.exports = {ContactPage};