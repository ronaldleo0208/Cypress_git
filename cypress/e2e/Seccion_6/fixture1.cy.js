/// <reference types="Cypress" /> 





// para que funcione los comandos


require ('cypress-plugin-tab')

describe ("Carga por fixture",()=>{
    //let data;
    //before(()=>{
        //cy.fixture('Datos').then((d)=>{
        //this.data=data
        //globalThis.data=data
        //data=d;

    before(function(){
        cy.fixture("Datos").as("datos_json") // el alias
    
    })   
   
   
    
   
   
   
   
    it("test uno cargando desde el fixture", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)
        
        cy.get("@datos_json").then((data)=>{

            cy.get("[placeholder='Full Name']").should("be.visible").type(data.name)
            cy.wait(2000)
            cy.get('#userEmail').should("be.visible").type(data.email)
            cy.wait(2000)
            cy.get('#currentAddress').should("be.visible").type(data.currentaddress)
            cy.wait(2000)
            cy.get('#permanentAddress').should("be.visible").type(data.permanentaddress)
            cy.wait(2000)
            cy.get('#submit').should("be.visible").click()
   
        
        }) 
    }) 
       
        
    
    Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
        // returning false here prevents Cypress from 
        // failing the test
        return false

    })
})