/// <reference types='Cypress' />
 import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');


describe ('Reto Custom', ()=>{
    let tiempo=1000
    before(()=>{  
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })
    /*it('easy 1', () => {
        cy.Campo_visible(":nth-child(2) > .inputGroupContainer > .input-group > .form-control", "Cristiano",500)
        cy.Campo_visible(":nth-child(3) > .inputGroupContainer > .input-group > .form-control", "Ronaldo",500)
        cy.Campo_visible(":nth-child(4) > .inputGroupContainer > .input-group > .form-control", "ronaldo@gmail.com",500)
        cy.Campo_visible(":nth-child(5) > .inputGroupContainer > .input-group > .form-control", "(845)1792603",500)
        cy.Campo_visible_Xpath("//input[@name='address']","Estados Unidos",500)
        cy.Campo_visible(":nth-child(7) > .inputGroupContainer > .input-group > .form-control","Miami por ahi por brickel",500)
        cy.get(".selectpicker").select("Please select your state").select("Florida")
        cy.Campo_visible(":nth-child(9) > .inputGroupContainer > .input-group > .form-control", "1243",500) 
        cy.Campo_visible(":nth-child(10) > .inputGroupContainer > .input-group > .form-control", "www.ronaldo.com",500)
        cy.Option_Click_force(':nth-child(2) > label > input',500)
        cy.Campo_visible(":nth-child(12) > .inputGroupContainer > .input-group > .form-control", "He is the GOAT on futbol",500)
        //cy.Option_Click_force('.btn', 500)
    })*/

       
    it('Reto custom 1', () => {
        cy.Selenium_Inputform("Cristiano","Ronaldo","ronaldo@gmail.com","(845)1792603","Estados Unidos","Miami por ahi por brickel","1243","www.ronaldo.com","He is the GOAT on futbol",1000)
    })

    it('Prueba Validando Email', () => {
        cy.Selenium_Inputform("Cristiano","Ronaldo","ronaldo.com","(845)1792603","Estados Unidos","Miami por ahi por brickel","1243","www.ronaldo.com","He is the GOAT on futbol",1000)
        cy.Validar_campo2("//small[@data-bv-validator='emailAddress']", "Please supply a valid email address", "email")    
    
    })

    it('Prueba Validando Nombre', () => {
        cy.Selenium_Inputform("1","Ronaldo","ronaldo@hot.com","(845)1792603","Estados Unidos","Miami por ahi por brickel","1243","www.ronaldo.com","He is the GOAT on futbol",1000)
        cy.Validar_campo2("//small[@data-bv-result='INVALID']", "Please enter more than 2 characters", "nombre")    
    
    })


})
    