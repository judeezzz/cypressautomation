describe('CSSLocators', () =>
{
    it('csslocators', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.url().should('include', 'dashboard')
    })
})