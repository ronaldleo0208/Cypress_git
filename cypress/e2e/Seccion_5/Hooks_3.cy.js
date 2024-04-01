/// <reference types='Cypress' />

import 'cypress-file-upload';

require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('reto hooks', ()=>{
    let tiempo=1000
    before(()=>{  
        cy.visit("https://www.saucedemo.com/")
        cy.title().should('eq','Swag Labs')
        cy.get('[data-test="username"]').should('be.visible').type('standard_user')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should("be.visible").click()
        cy.wait(tiempo)
        
    })
    
    after(()=>{ 
      cy.log("###########----- Ultimo Ciclo------ Finald de todo--------########")  
      cy.wait(tiempo)
      cy.xpath("//button[@id='react-burger-menu-btn']").should("be.visible").click()
      cy.wait(tiempo)
      cy.xpath("//a[contains(@id,'link')][@class='bm-item menu-item'][contains(.,'Logout')]").should("be.visible").click()
      cy.wait(tiempo)
    })        
    it('test 1', () => {
        cy.xpath("(//div[contains(@class,'name ')])[5]").should("be.visible").click()
        cy.wait(tiempo)
        cy.xpath("//button[contains(@id,'back-to-products')]").should("be.visible").click()
        cy.wait(tiempo)
    })
    
    it('test 2', () => {
        cy.xpath("(//div[@class='inventory_item_name '])[6]").should("be.visible").click()
        cy.wait(tiempo)
        cy.xpath("//button[contains(@id,'back-to-products')]").should("be.visible").click()
        cy.wait(tiempo)
    })
    it('test 3', () => {
        cy.xpath("(//div[contains(@class,'name ')])[2]").should("be.visible").click()
        cy.wait(tiempo)
        cy.xpath("//button[contains(@id,'back-to-products')]").should("be.visible").click()
        cy.wait(tiempo)
    })


})