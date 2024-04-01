import { Given,When,Then, } from "@badeball/cypress-cucumber-preprocessor";
    
    
    
Given('Open the main browser',()=>{
    cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")

})

When('loading the name',()=>{
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type('Ronald')
   cy.wait(500)

})

When('loading the last name',()=>{
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type('De La Rosa')
    cy.wait(500)


})

When('loading the email',()=>{
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type('Ronald@gmail.com')
    cy.wait(500)


})

Then('validate the name of the page',()=>{
    cy.title().should('eq',"Selenium Easy - Input Form Demo with Validations")
    cy.wait(500)
})