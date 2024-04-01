/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('Navegacion entre las paginas', ()=>{
    it('back, forward', () => {
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
       
        cy.xpath("(//div[contains(.,'Elements')])[7]").should("be.visible").click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should("be.visible").click()
        cy.wait(tiempo)
        cy.go("back")
        cy.go("back")
        cy.wait(tiempo)
        cy.go("forward")
        cy.go("forward")
    
    })

    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false
})

it.only('Reload page', () => {
    let tiempo=1000
    
    
   
    cy.visit('https://demoqa.com/') 
    cy.title().should('eq','DEMOQA')
    cy.wait(tiempo)
   
    cy.xpath("(//div[contains(.,'Elements')])[7]").should("be.visible").click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should("be.visible").click()
    cy.wait(tiempo)
    
    cy.get('#userName').should("be.visible").type("Ronaldo")
    cy.get('#userEmail').should("be.visible").type("ronaldo@gmail.com")

    cy.reload()
    

})

Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
    // returning false here prevents Cypress from 
    // failing the test
    return false
})
    
})

