class loginPage{

    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click()
    }

    verifyLogin(){
        cy.url().should('include', 'dashboard')
    }
}

export default loginPage;