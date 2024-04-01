///<reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath
import 'cypress-file-upload'



require('@4tw/cypress-drag-drop')

describe ("Configuracion y uso de los Snippets",()=>{

    it("Snippet uno", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")

        cy.get('[argumento]').should('be.visible').type('texto')
        cy.wait(tiempo)

        })


        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
     

        })

   })   // cierre de describe