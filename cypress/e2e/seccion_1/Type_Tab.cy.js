/// <reference types="Cypress" /> 
// para que funcione los comandos

require ('cypress-plugin-tab')

describe ("Ejemplo con funcion tab",()=>{

    

    it("Type con tab ", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/automation-practice-form");
        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
        })
        
        cy.title().should("eq","DEMOQA")
        cy.wait(1500)

        cy.get('#firstName').type("Cristiano").tab().  //funcion para hacer el salto de tabla o tab
        type("Ronaldo").tab().
        type("cristianor@gmail.com")
        
    })    

   })   // cierre de describe