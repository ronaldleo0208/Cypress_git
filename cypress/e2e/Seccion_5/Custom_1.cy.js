/// <reference types='Cypress' />
 import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('Comandos Personalizados Custom', ()=>{
    let tiempo=1000
    before(()=>{  
        cy.visit('https://demoqa.com/text-box'),
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
    
       

    
    })
    it('Demo Uno', () => {
        cy.Campo_visible("#userName", "Cristiano",500)
        cy.Campo_visible("#userEmail", "Cristiano@gmail.com",500)
        cy.Campo_visible_Xpath("//textarea[@id='currentAddress']", "Miami, EEUU", 500)
        cy.Campo_visible_Xpath("//textarea[@id='permanentAddress']", "Madeira, POrtugal",500)
        //cy.Option_Click_Xpath("//button[@id='submit']",500)
        cy.Option_Click_force("#submit",500)
    })

    it.only('Demo Dos', () => {
       cy.Texbox_ToolsQA("Cristiano", "Cristiano@gmail.com", "Miami, EEUU", "Madeira, POrtugal", 1000)
    })

})
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
    // returning false here prevents Cypress from 
    // failing the test
    return false
});