describe("Check Radio buttons and Checkboxes",() =>
{
    it("Checking Radio Buttons",()=>
    {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        
        //visibility of radio button
        cy.get("input[value='green']").should('be.visible')
        cy.get("input[value='blue']").should('be.visible')

        //selecting radio button
        cy.get("input[value='green']").check().should('be.checked')
        cy.get("input[value='blue']").should('not.be.checked')
    })

    it("Checking Checkbox",()=>
    {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        
        //Visibility of the element
        cy.get("input[value='option-1']").should('be.visible')

        //Selecting single checkbox
        cy.get("input[value='option-1']").check().should('be.checked')

        //Uncheck checkbox
        cy.get("input[value='option-1']").uncheck().should('not.be.checked')

        //Selecting all the checkboxes
        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.get("input[type='checkbox']").uncheck().should('not.be.selected')

        //Selecting the first and last checkbox
        cy.get("input[type='checkbox']").first().check()
        cy.get("input[type='checkbox']").last().check()

    })
})

describe('Handling Dropdowns', ()=>
{
    it('Dropdown with select', ()=>
    {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('#dropdowm-menu-1')
        .select('python')
        .should('have.value','python')
    })

})