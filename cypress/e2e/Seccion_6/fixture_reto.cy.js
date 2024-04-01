/// <reference types="Cypress" /> 





// para que funcione los comandos


require ('cypress-plugin-tab')


describe ("Reto Fixture",()=>{
  


it("test uno cargando desde el fixture", () => {   //coloca it y te va aparecer la sintaxis
   //cy.visit("https://demoqa.com/text-box");
    //cy.title().should("eq","DEMOQA")
    //cy.wait(2000)
    
    

    cy.fixture("Datos").then( testdata =>{
        testdata.forEach(data => {
            const d_name=data.name
            const d_email=data.email
            const d_currentaddress=data.currentaddress
            const d_permanentaddress=data.permanentaddress
        
            cy.visit("https://demoqa.com/text-box");
            cy.title().should("eq","DEMOQA")
            cy.wait(1000)
        
            cy.get("[placeholder='Full Name']").should("be.visible").type(d_name)
            cy.wait(1000)
            cy.get('#userEmail').should("be.visible").type(d_email)
            cy.wait(1000)
            cy.get('#currentAddress').should("be.visible").type(d_currentaddress)
            cy.wait(1000)
            cy.get('#permanentAddress').should("be.visible").type(d_permanentaddress)
            cy.wait(1000)
            cy.get('#submit').should("be.visible").click()
        
        })
        
        
        })
   

        

    
    }) 
}) 
   
    

Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
    // returning false here prevents Cypress from 
    // failing the test
    return false

})
