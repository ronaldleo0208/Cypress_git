/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')


describe ("Cypress eventos con el mouse",()=>{


    it("Drag and Drop", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=2000
        
        
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Drag and Drop Demo")
        

        /*cy.get('#todrag > :nth-child(2)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone', {force:true})*/

        const dataTransfer = new DataTransfer;
 
        //primero
        cy.get("#todrag > :nth-child(2)")
            .trigger('dragstart', { dataTransfer })
        cy.get("#mydropzone")
            .trigger('dragenter')
            .trigger('dragover', { dataTransfer })
            .trigger('drop', { dataTransfer })
        cy.get("#todrag > :nth-child(2)")
            .trigger('dragend')
        
        //segundo
        cy.get("#todrag > :nth-child(3)")
            .trigger('dragstart', { dataTransfer })
        cy.get("#mydropzone")
            .trigger('dragenter')
            .trigger('dragover', { dataTransfer })
            .trigger('drop', { dataTransfer })
        cy.get("#todrag > :nth-child(3)")
            .trigger('dragend')
 
        //tercero
        cy.get("#todrag > :nth-child(2)")
            .trigger('dragstart', { dataTransfer })
        cy.get("#mydropzone")
            .trigger('dragenter')
            .trigger('dragover', { dataTransfer })
            .trigger('drop', { dataTransfer })
        cy.get("#todrag > :nth-child(2)")
            .trigger('dragend')
 
        //ultimo
        cy.get("#todrag > span")
            .trigger('dragstart', { dataTransfer })
        cy.get("#mydropzone")
            .trigger('dragenter')
            .trigger('dragover', { dataTransfer })
            .trigger('drop', { dataTransfer })
        cy.get("#todrag > span")
            .trigger('dragend')
        
        
      

        

    })

})