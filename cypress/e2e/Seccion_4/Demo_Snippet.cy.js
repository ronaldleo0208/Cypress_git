/// <reference types='Cypress' />
 import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('Demo del snippet plantilla', ()=>{
    it('test', () => {
        let tiempo=1000
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
        })
});