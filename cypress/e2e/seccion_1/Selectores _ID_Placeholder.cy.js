/// <reference types="Cypress" /> 
// para que funcione los comandos



describe ("Tipo de Selectores",()=>{

    it("Selector por ID", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get('#userName').should("be.visible").type("Alessandro DeL Piero")//selector con id
        cy.get('#userEmail').should("be.visible").type("delpiero@gmail.com")// selector con id
        cy.wait(1500)

    
    
    })
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
 
    })

    it.only("Selector por Atributo,Placeholder", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Alessandro DeL Piero")
        cy.get("[placeholder='name@example.com']").should("be.visible").type("delpiero@gmail.com")
        cy.wait(1500)

    
    
    })
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
 
    })
    
    })   // cierre de describe