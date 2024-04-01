/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Seleccionar en un combobox",()=>{


    it.only("Seleccionar en un combobox de opciones", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get('#select-demo').should("be.visible").select("Wednesday").should("have.value","Wednesday")
        cy.wait(1500)

        cy.get('#select-demo').should("be.visible").select("Sunday").should("have.value","Sunday")
        cy.get('[value="Texas"]').should("be.visible").click()
        cy.wait(1500)

    })

    it("ingresar una palabra en el buscador y presionar enter", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://www.google.co.ve/");
        cy.title().should("eq","Google")
        cy.wait(1000)

        cy.get('#APjFqb').should("be.visible").type("Ferrari").type("{Enter}") // funcion para typear algo en el buscador y presionar enter para que realice la busqueda
        cy.wait(2000)

       
        })

        it("Seleccionar varias opciones multiselect", () => {   //coloca it y te va aparecer la sintaxis
            cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html");
            cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
            cy.wait(1000)

            cy.get('#multi-select').should("be.visible").select(["Florida","Texas","Washington"])
            cy.wait(1500)
    
           
 
            


        })

        it("Seleccionar varias opciones multiselect y usar funcion then", () => {   //coloca it y te va aparecer la sintaxis
            cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html");
            cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
            cy.wait(1000)

            cy.get('#multi-select').should("be.visible").select(["Florida","Texas","Washington"]).then(()=>{
                cy.get('#printMe').should("be.visible").click()

            })

            
            cy.wait(1500)
    
           
 
            


        })
    
})   // cierre de describe