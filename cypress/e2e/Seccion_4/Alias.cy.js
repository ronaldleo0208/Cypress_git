/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');

describe ("Manejo de Alias en cypress",()=>{

    it("Alias Uno", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
        cy.title().should("eq","Input Validation")

        cy.get('#firstname').should("be.visible").as("nom")
        cy.get("@nom").type("Cristiano")
        cy.wait(1500)

        cy.get('#surname').should("be.visible").as("app")
        cy.get("@app").type("Ronaldo Segundo")
        cy.wait(1500)

        cy.get('#age').should("be.visible").as("edad")
        cy.get('#country').should("be.visible").as("pais")
        cy.get('#notes').should("be.visible").as("notas")
        
        cy.get("@edad").type("39")
        cy.get("@pais").select("Venezuela").should("have.value", "Venezuela")
        cy.get("@notas").type("Escribiendo y practicando aqui")
        cy.wait(1500)

        cy.xpath("//input[@type='submit']").click({force:true})
        cy.wait(1500)
        
    
    
    })

 
    
    
    })   // cierre de describe