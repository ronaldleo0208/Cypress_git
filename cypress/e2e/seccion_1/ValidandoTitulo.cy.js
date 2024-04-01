/// <reference types="Cypress" />



describe ("Seccion 1 validando el titulo",()=>{

    it("Test Validar el Titulo", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");

        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
       })
         

        cy.title().should("eq","DEMOQA") // esta funcion la estoy usando para validar el titulo

        cy.log("La funcion title funciono bien")
    })

 
    
    
    })   // cierre de describe