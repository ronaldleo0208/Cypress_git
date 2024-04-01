/// <reference types='Cypress' />
 import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('Hooks Ejemplos', ()=>{
    let tiempo=1000
    before(()=>{
        
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
    })
    
    
    it('test uno', () => {
        cy.get('[type="checkbox"]').check({force: true}).should("be.checked")
        cy.wait(tiempo)

        })

    it('test dos', () => {
        cy.get("[type='checkbox']").uncheck({force: true}).should("not.be.checked")
        cy.wait(tiempo)
    
    })

    it('test tres', () => {
        cy.xpath("(//input[@type='checkbox'])[6]").check()
        cy.wait(tiempo)
    
    })
});