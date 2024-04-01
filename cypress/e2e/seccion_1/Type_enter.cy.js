/// <reference types="Cypress" /> 
// para que funcione los comandos


describe ("",()=>{

    it(" Type-->Enter ", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://www.google.co.ve/");
        cy.title().should("eq","Google") // esta funcion la estoy usando para validar el titulo
        cy.wait(1500)

        cy.get("#APjFqb").type("cypress io{enter}") // funcion para presionar enter en el buscador 
        cy.wait(1500)
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
        cy.wait(1500)


    })

 
    
    
    })   // cierre de describe