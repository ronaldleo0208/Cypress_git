/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe("Hooks", () =>{

    before(()=>{
        cy.log("Esto inicia antes que todo una sola vez")
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test muy importante")
    })

    afterEach(()=>{
        cy.log("Esto se hace al final de todos los test")
    })

    after(()=>{
        cy.log("############# Ultimo Ciclo - Final de todo ##############")
        cy.wait(2000)
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
    })


    it("test uno", () => {   //coloca it y te va aparecer la sintaxis
        cy.log("test uno");
    })

    it("test dos", () => {   //coloca it y te va aparecer la sintaxis
        cy.log("test dos");
    })
    
    it("test tres", () => {   //coloca it y te va aparecer la sintaxis
        cy.log("test tres");
    })

    it("test cuatro", () => {   //coloca it y te va aparecer la sintaxis
        cy.log("test cuatro");
    })



})

