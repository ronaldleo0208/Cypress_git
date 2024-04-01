import { Given,When,Then, } from "@badeball/cypress-cucumber-preprocessor";
    
    
    
Given('abrir pagina principal',()=>{
    cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")

})

When('cargando el nombre {word}',(nombre)=>{
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(nombre)
   cy.wait(500)

})

When('cargando el apellido {word}',(apellido)=>{
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(apellido)
    cy.wait(500)


})

When('cargando el email {word}',(email)=>{
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(email)
    cy.wait(500)


})

When('cargando el numero de telefono {word}',(telefono)=>{
    cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(telefono)
    cy.wait(500)


})

When('cargando la address {word}',(dir1)=>{
    cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(dir1)
    cy.wait(500)


})

When('cargando la direccion {word}',(dir2)=>{
    cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(dir2)
    cy.wait(500)


})

When('seleccionando el estado {word}',(estado)=>{
    cy.get(".selectpicker").select("Please select your state").select(estado)
    cy.wait(500)


})

When('cargando el zip code {word}',(zip)=>{
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(zip)
    cy.wait(500)


})

When('cargando el web site {word}',(web)=>{
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(web)
    cy.wait(500)


})

When('seleccionando el hosting',()=>{
    cy.Option_Click_force(':nth-child(2) > label > input',500)
    cy.wait(500)


})

When('cargando el projec description {word}',(project)=>{
    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(project)
    cy.wait(500)


})

Then('validando el nombre de la pagina',()=>{
    cy.title().should('eq',"Selenium Easy - Input Form Demo with Validations")
    cy.wait(500)
})

Then('Click en el boton send',()=>{
    cy.get('.btn').should('be.visible').click()
    cy.wait(500)


})


