/// <reference types="Cypress" /> 
// para que funcione los comandos


describe ("Ejemplo de Type page up, page down",()=>{

    it("Type pageup", () => {   //coloca it y te va aparecer la sintaxis , .only es solo para que corra el test donde colocaste el only
        cy.visit("https://demoqa.com/text-box");

        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false

        })
        cy.title().should("eq","DEMOQA")
        cy.wait(1500)
        cy.get("#userName").type('{pageup}')
        cy.wait(2500)
    }) 
          
    it.only("Type pageDown", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");

        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false

        })
        cy.title().should("eq","DEMOQA")
        cy.wait(1500)
        cy.get("#userName").type('{pagedown}')
        cy.wait(2500)
    }) 

    
    
    })   // cierre de describe