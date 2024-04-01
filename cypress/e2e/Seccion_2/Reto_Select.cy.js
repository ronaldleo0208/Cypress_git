/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Reto 3  Select",()=>{


    it("Hacer un multiselect y clickear el boton next", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html");
        cy.title().should("eq","Selenium Easy - JQuery Dual List Box Demo")
        cy.wait(1000)

        cy.get(".pickData").should("be.visible").select(["Alice","Giovanna","Lara"])
        cy.wait(2000)
        cy.get('.pAdd').should("be.visible").click().then(()=>{
        cy.wait(2000)
        cy.get('.pAddAll').should("be.visible").click().then(()=>{
        cy.wait(2000)
        cy.get('.pRemoveAll').should('be.visible').click()
   
        })
    })
        


        
        
        
        
        

      

    })

})//cierre