describe("Assertions demo", () =>{
    //should, and
    it("implicit assertion", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')
    })

    it("implicit assertion should", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')
    })

    it("implicit assertion and", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
    })

    it("implicit assertion not", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')
    })

    it("implicit assertion title", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
    })

    it("implicit assertion logo visible", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
    })

    it("implicit assertion keyword have.length", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('a').should('have.length', 5);
    })

    it("implicit assertion keyword have.value", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Username']").should('have.value',"Admin")
    })
})

describe("Explicit Assertions", ()=>{
    //expect, assert
    it("explicit assertion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Mike Ross";

        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal("Ross")

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,"Ross")
        })
     
    })
})