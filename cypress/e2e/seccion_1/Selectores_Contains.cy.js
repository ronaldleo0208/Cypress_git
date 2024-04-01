// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Tipo de Selectores",()=>{

    /*it("Selector por Contains", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
    
    
    })
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
 
    })*/
    
    
    it.only("Selector por Contains", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        
        cy.get(".radio-inline").contains("Female").click()
        cy.wait(2000)
        cy.get(".radio-inline").contains("Male").click()
        cy.wait(2000)
    
        cy.get(".radio-inline").contains("Female").click()
        cy.wait(2000)
        cy.get(".radio-inline").contains("Male").click()
        cy.wait(2000)
       
    
    })

    it("Selector por Copy Selector", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("123458888")
        cy.wait(1000)
        
    
    
    })
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
 
    })
 
})
