/// <reference types="Cypress" /> 
// para que funcione los comandos


require ('cypress-plugin-tab')

describe ("Carga por fixture",()=>{
   
    before(function(){
        cy.fixture('Datos').then(function(data){
        //this.data=data
        globalThis.data=data
    
    })   
   
    })
   
   
   
   
    it("test uno cargando desde el fixture", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        
        cy.title().should("eq","DEMOQA")
        cy.wait(2000)

        

    })

})