/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Referencias a windows",()=>{


    it("Windows propiedades charset", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=1500
        
        
        cy.visit("https://testsheepnz.github.io/");
        cy.title().should("eq","TestSheepNZ Resource Page")
        cy.wait(tiempo)

        cy.document().should("have.property", "charset").and('eq','UTF-8')

    })

    it.only("Validando windows URL", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=1500
        
        
        cy.visit("https://testsheepnz.github.io/");
        cy.title().should("eq","TestSheepNZ Resource Page")
        cy.wait(tiempo)

        cy.url().should("include","github.io")
        cy.url().should("eq","https://testsheepnz.github.io/")
    })

})