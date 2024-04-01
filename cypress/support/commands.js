// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Campo_visible", (selector,texto,t) =>{
    let tiempo=t
    cy.get(selector).should("be.visible").type(texto)
    cy.wait(tiempo)

})

Cypress.Commands.add("Campo_visible_Xpath", (selector,texto,t) =>{
    let tiempo=t
    cy.xpath(selector).should("be.visible").type(texto)
    cy.wait(tiempo)

})

Cypress.Commands.add("Option_Click", (selector,t) =>{
    let tiempo=t
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)

})

Cypress.Commands.add("Option_Click_Xpath", (selector,t) =>{
    let tiempo=t
    cy.xpath(selector).should("be.visible").click()
    cy.wait(tiempo)

})

Cypress.Commands.add("Option_Click_force", (selector,t) =>{
    let tiempo=t
    cy.get(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)

})

Cypress.Commands.add("Option_Click_force_xpath", (selector,t) =>{
    let tiempo=t
    cy.xpath(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)

})

Cypress.Commands.add("Validar_campo", (selector,message,nombre_campo,t) =>{
    cy.xpath(selector).should("be.visible").then((val)=>{
        let dato=val.text()
        let mensaje=message
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("##############################")
            cy.log("EL " + nombre_campo + " No es Valido" )
            cy.log("##############################")
}

})

        
    
})

Cypress.Commands.add("Validar_campo2", (selector,message,nombre_campo,t) =>{
    cy.xpath(selector).should("be.visible").should("contain", message).then((val)=>{
        
            cy.log("##############################")
            cy.log("EL " + nombre_campo + " No es Valido" )
            cy.log("##############################")


})

        
    
})










//funciones globales o completas
//creando la funcion tools QA

Cypress.Commands.add('Texbox_ToolsQA', (name,email,dir1,dir2,t) => { 
    let tiempo=t
    cy.get("#userName").should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get(".col-md-9 > #currentAddress").should("be.visible").type(dir1)
    cy.wait(tiempo)
    cy.get(".col-md-9 > #permanentAddress").should("be.visible").type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should("be.visible").click()
    cy.wait(tiempo)
})


//creando la funcion Selenium Easy
Cypress.Commands.add('Selenium_Inputform', (name,lastname,email,phone,dir1,city,zipcode,website,project,t) => { 
    let tiempo=t
    cy.get(":nth-child(2) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get(":nth-child(3) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(lastname)
    cy.wait(tiempo)
    cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get(":nth-child(5) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(phone)
    cy.wait(tiempo)
    cy.xpath("//input[@name='address']").clear().should("be.visible").type(dir1)
    cy.wait(tiempo)
    cy.get(":nth-child(7) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(city)
    cy.wait(tiempo)
    cy.get(".selectpicker").select("Please select your state").select("Florida")
    cy.wait(tiempo)
    cy.get(":nth-child(9) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(zipcode)
    cy.wait(tiempo)
    cy.get(":nth-child(10) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(website)
    cy.wait(tiempo)
    cy.get(':nth-child(2) > label > input').should("be.visible").click({force:true})
    cy.wait(tiempo)
    cy.get(":nth-child(12) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(project)
    cy.wait(tiempo)
    cy.get(".btn").should("be.visible").click({force:true})
    cy.wait(tiempo)
})



