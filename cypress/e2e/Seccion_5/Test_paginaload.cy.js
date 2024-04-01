/// <reference types='Cypress' />
 import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('description', ()=>{
    it('test', () => {
        
     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")//{headers: { "Accept-Encoding": "gzip, deflate" }})
        //cy.title().should('eq','OrangeHRM')
        cy.wait(1500)
        
    
        
     
   
    })

})