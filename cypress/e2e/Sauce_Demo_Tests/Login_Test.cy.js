/// <reference types="Cypress" /> 



// para que funcione los comandos


describe ("Login Usetr Hitory 1",()=>{

    it("", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://www.saucedemo.com/");
        cy.title().should("eq","Swag Labs")
        cy.wait(1000)
    
        //cy.get('[data-test="username"]').should("be.visible").type("standard_user")
        //cy.get('[data-test="password"]').should("be.visible").type("secret_sauce")
    
    })


    
    })   // cierre de describe