/// <reference types="Cypress" /> 
// para que funcione los comandos


require ('cypress-plugin-tab')

describe ("Primer Reto",()=>{

    /* it("", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/table-search-filter-demo.html");
        cy.title().should("eq","Selenium Easy - Table Data search and filter data")
        cy.wait(1000)

        cy.get('#task-table-filter').should("be.visible").type("Jane")
        cy.get('#task-table-filter').should("be.visible").clear() // funcion para limpiar el buscador
        cy.wait(1000)

        cy.get(':nth-child(3) > :nth-child(1) > [href="#"]').should("be.visible").click()
        cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(5) > a').should("be.visible").click()
        cy.wait(1000)

        cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').type("Cristiano").tab(). //recuerda siempre colocar arriba el plugin para que los tabs funcionen
        type("Ronaldo").tab().
        type("cristiano@gamil.com").tab().
        type("0424179260").tab().
        type("Lago azul").tab(). 
        type("Madeira") 

    })*/
    
    it("", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/webtables");
        
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.get('#searchBox').should("be.visible").clear() // funcion para limpiar el buscador
        cy.wait(1000)
        
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').type("Cristiano").tab().
        type("Ronaldo").tab(). 
        type("cristiano@ronaldo.com").tab(). 
        type("39").tab(). 
        type("50000000").tab(). 
        type("Delantero")
        cy.get('#submit').should("be.visible").click()

        cy.get('#searchBox').should("be.visible").type("Cristiano")
        cy.get('#searchBox').should("be.visible").clear() // funcion para limpiar el buscador
        cy.wait(1000)

        //editar campo
       cy.get("#edit-record-4").should("be.visible").click()
       cy.get('#age').should("be.visible").clear().type(22)
       cy.get('#salary').should("be.visible").clear().type(2000000)
       cy.wait(1500)
       cy.get('#submit').should("be.visible").click()
       cy.get("#delete-record-3").should("be.visible").click()
       cy.wait(1500)


    })
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
      })
   
     })   // cierre de describe