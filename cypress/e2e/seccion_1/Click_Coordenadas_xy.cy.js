/// <reference types="Cypress" /> 
// para que funcione los comandos


describe ("Opciones de click",()=>{

    it("Click por Coordenadas (x,y)", () => {   //coloca it y te va aparecer la sintaxis, esta funcion es para un por coordenadas
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq","OrangeHRM")
        cy.wait(1000)
        
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50,5)
        
    })

 
    
    
    })   // cierre de describe