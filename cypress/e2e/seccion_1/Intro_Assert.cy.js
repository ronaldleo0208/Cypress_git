/// <reference types="Cypress" /> 
// para que funcione los comandos


describe ("Introduccion a los Assert",()=>{
   
   
    it("Demo de los Assert ", () => {   //coloca it y te va aparecer la sintaxis
    cy.visit("https://demoqa.com/automation-practice-form");
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
    })
    cy.title().should("eq","DEMOQA")
    cy.wait(1500)
    cy.get('#firstName').should("be.visible").type("Cristiano") //funcion para verificar si el campo es visible 
    cy.wait(1000)
    cy.get('#lastName').should("be.visible").type("Ronaldo")
    cy.wait(1000)
    cy.get('#userEmail').should("be.visible").should("be.enabled").type("cristianor@gmail.com")
    cy.wait(1000)
    })  
    
    })   // cierre de describe