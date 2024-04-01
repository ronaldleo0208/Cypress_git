// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Tipo de Selectores",()=>{

    it("Selector por Xpath", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Alessandro DeL Piero")//selector con xpath
        cy.xpath("//input[contains(@id,'userEmail')]").should("be.visible").type("delpiero@gmail.com")// selector con xpath
        cy.wait(1500)

    
    
    })
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
 
    })

})
