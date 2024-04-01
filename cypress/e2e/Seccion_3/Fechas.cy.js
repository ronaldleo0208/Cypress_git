/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')

describe ("Fechas",()=>{


    it("Fecha Uno", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=2000
        
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html");
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("06/09/2022 {esc}")
        cy.wait(tiempo)
        //cy.get('#sandbox-container1 > h4').click()


        

    })

        /*it("Fecha Dos", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=2000
        
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html");
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        
        cy.get('[placeholder="Start date"]').should("be.visible").type("06/06/2022 {esc}")
        
        cy.get('[placeholder="End date"]').should("be.visible").type("06/06/2023 {esc}")


        

    })*/

    it.only("Fecha tres", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=2000
        
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html");
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)
        cy.get('[placeholder="Start date"]').should("be.visible").type("06/06/2022 {esc}").tab().type("06/06/2023 {esc}")
        cy.wait(tiempo)
        


        

    })

})