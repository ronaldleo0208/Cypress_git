/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Segundo Reto",()=>{

    it("Segundo Reto", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should("eq","Computers database")
        cy.wait(1000)

        //buscando 
        cy.xpath("//*[@id='searchbox']").should("be.visible").type("ARRA")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.get('#add').should("be.visible").click()

        //add
        cy.get('#name').should("be.visible").type("Cypress")
        cy.get('#introduced').should("be.visible").type("2024-03-05")
        cy.get('#discontinued').should("be.visible").type("2026-04-01")

        // combo select
        cy.get('#company').should("be.visible").select("Nokia").should("have.value","16")
        cy.get('.primary').should("be.visible").click()
        cy.wait(2000)

        cy.xpath("//*[@id='searchbox']").should("be.visible").type("Cypress")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1500)
    })

 
    
    
    })   // cierre de describe