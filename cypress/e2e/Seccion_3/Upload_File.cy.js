/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath
import 'cypress-file-upload'

describe ("Subir Imagenes",()=>{


    it("cargando imagenes", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        const ruta='img1.png'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)
       
   
        })
        
        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
     
        })

    })

