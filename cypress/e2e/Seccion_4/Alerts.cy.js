/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');

describe ("Alerts en cypress",()=>{

    it("Alerta Uno", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")

        cy.xpath("//a[@href='#myModal0']").click()
        cy.wait(1500)
        

        //cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click({force:true})
        //cy.wait(1500)
    
        //cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click({force:true})
        //cy.wait(1500)

        cy.xpath("(//button[@type='button'])[2]").click({force:true})

    })

 
    
    
    })   // cierre de describe