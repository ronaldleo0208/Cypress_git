/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');

describe ("Manejo de Invoke",()=>{

    it("Reto Invoke", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
        cy.title().should("eq","Input Validation")

        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(1500) 
        cy.get('#firstname').should("be.visible").as("nom")
        cy.wait(1500) 
        cy.get("@nom").type("Cristiano").then(()=>{
            cy.get('[for="surname"]').invoke("show", "6")
            cy.get('#surname').invoke("show", "8s")
            cy.wait(1500)
            cy.get('#surname').type("Ronaldo Moreno")
        
        })


 
    })

 
    
    
    })   // cierre de describe