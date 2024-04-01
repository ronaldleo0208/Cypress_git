/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Nueva Seccion Checkbox",()=>{


    it("Seleccionar los radios button", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        //cy.get('.panel-body > :nth-child(3) > input').check() // seleccionando un radio button utilizando la funcion check
        cy.get('.panel-body > :nth-child(3) > input').click() // seleccionando un radio button utilizando la funcion click

        cy.get('.panel-body > :nth-child(2) > :nth-child(2) > input').check()
        cy.get('.panel-body > :nth-child(3) > :nth-child(4)').click()
    
    })

       
 
    
    
    })   // cierre de describe