/// <reference types="Cypress" /> 
// para que funcione los comandos


describe ("Opciones de click",()=>{

    it("Click sencillo", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq","OrangeHRM")
        cy.wait(1000)
        
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').should("be.visible").click()
        cy.wait(1500)
        
    })

 
    
    
    })   // cierre de describe