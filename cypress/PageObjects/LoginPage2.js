class loginPage
{
    txtUserName="input[placeholder='Username']";
    txtUserPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"

    setUserName(username)
    {
        cy.get(this.txtUserName).clear()
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtUserPassword).clear()
        cy.get(this.txtUserPassword).type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin(){
        cy.url().should('include', 'dashboard')
    }
}

export default loginPage;