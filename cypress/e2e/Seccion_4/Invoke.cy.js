///<reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath
import 'cypress-file-upload'



require('@4tw/cypress-drag-drop')

describe ("Manejo de Invoke en cypress",()=>{

   /* it("Invoke text", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
        cy.title().should("eq","Input Validation")

        cy.get('.page-body > :nth-child(5)').invoke("text").as("Info")
        cy.get("@Info").should("contain", "The information will be submitted to the server if it passes client side validation.")
        cy.wait(1500)
    
        cy.get("[for='firstname']").invoke("text").as("nom_uno")
        cy.wait(1500)
        cy.get("@nom_uno").should("contain", "First name:").then(()=>{

        cy.get('#firstname').type("Ronaldo")

        })*/


    it("Invoke estilos", () => { //coloca it y te va aparecer la sintaxis
        
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
        cy.title().should("eq","Input Validation")
    
        cy.get('[for="firstname"]').invoke("attr","style","color:Blue; fontSize: 50px")
        
    
    })
    

    it("Invoke ocultar y mostrar", () => { //coloca it y te va aparecer la sintaxis
        
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
        cy.title().should("eq","Input Validation")
    
        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(1500)
        cy.get('[for="firstname"]').invoke("show", "3s")
        cy.get('#firstname').invoke("show", "3s")
    })

    
    it("Invoke src", () => { //coloca it y te va aparecer la sintaxis
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")
    
        cy.get('.cbt').invoke("attr", "src").should("include", "930_180.png")
    
    
    })
    
    it.only("Invoke Target Blank clase 158", () => { //coloca it y te va aparecer la sintaxis
        
        cy.visit("https://dvwa.co.uk/");
     
        cy.get('#sales-box > a').invoke("removeAttr", "target").click({force:true})
    
       
    
    
    })    


})
    

  // })   // cierre de describe