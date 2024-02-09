import loginPage from "../PageObjects/LoginPage"
import loginPage2 from "../PageObjects/LoginPage2"

describe('POM', () =>
{
    it('loginTest', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.url().should('include', 'dashboard')
    })

    //using pom method 1
    it('loginTestWithPOM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const loginObj = new loginPage();
        loginObj.setUserName('Admin')
        loginObj.setPassword('admin123')
        loginObj.clickSubmit()
        loginObj.verifyLogin()
    })

    //using pom method 2
    it('loginTestWithPOM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const loginObj = new loginPage2();
        loginObj.setUserName('Admin')
        loginObj.setPassword('admin123')
        loginObj.clickSubmit()
        loginObj.verifyLogin()
    })

     //using pom with fixures
     it.only('loginTestWithPOM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangehrm').then((data)=>
        { 
            const loginObj = new loginPage2();
            loginObj.setUserName(data.username)
            loginObj.setPassword(data.password)
            loginObj.clickSubmit()
            loginObj.verifyLogin()
        }
       
        )
    })
})