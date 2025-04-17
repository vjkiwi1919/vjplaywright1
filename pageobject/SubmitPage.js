class SubmitPage {

    constructor(page){

        this.page = page; 
        this.Contactlink = page.getByRole('link', { name: 'Contact' })
        this.Name =  page.locator("#forename");
        this.Email = page.locator("[name='email']");
        this.Text = page.getByRole('textbox', { name: 'Message *' }) 
        this.Submit = page.getByRole('link', { name: 'Submit' })
                          
    }
    
    async checkValidation(name,email,message,confirmation) 
 {  
    await this.page.waitForLoadState();
    await this.Contactlink.click();
    await this.Name.fill(name);
    await this.Email.fill(email);
    await this.Text.fill(message);
    await this.Submit.click();   
        
 }

}
module.exports = {SubmitPage};