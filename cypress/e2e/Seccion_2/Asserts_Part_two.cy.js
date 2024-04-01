/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Asserts",()=>{


    it("Asserts Contain.text y have.text", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        cy.get('#userName').should("be.visible").type("Cristiano Ronaldo")
        cy.get('#userEmail').should("be.visible").type("Cristiano@gmail.com")
        cy.get('#submit').should("be.visible").click()
        cy.wait(1500)
        cy.get('#name').should("have.text","Name:Cristiano Ronaldo")
        cy.get('#name').should("contain.text","Cristiano Ronaldo")
        cy.wait(1500)

       
   
        })
        
        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
     
        })

        it("Asserts have.value mas then", () => {   //coloca it y te va aparecer la sintaxis
            cy.visit("https://demoqa.com/text-box");
            cy.title().should("eq","DEMOQA")
            cy.wait(1000)
    
            cy.get('#userName').should("be.visible").type("Cristiano Ronaldo")
            cy.get('#userName').should("have.value", "Cristiano Ronaldo").then(()=>{
            cy.get('#userEmail').should("be.visible").type("Cristiano@gmail.com")
            cy.get('#submit').should("be.visible").click()


            })
    
            })
            
            Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
                // returning false here prevents Cypress from 
                // failing the test
                return false
         
            })

            it("Asserts have.class", () => {   //coloca it y te va aparecer la sintaxis
                cy.visit("https://demoqa.com/text-box");
                cy.title().should("eq","DEMOQA")
                cy.wait(1000)
        
                cy.get('#userName').should("be.visible").should("have.class", "mr-sm-2").then(()=>{
                    cy.get('#userName').type("Alessandro del Piero")



                })
        
                })
                
                Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
                    // returning false here prevents Cypress from 
                    // failing the test
                    return false
             
                })

            it("Asserts have.classy la funcion and", () => {   //coloca it y te va aparecer la sintaxis
                cy.visit("https://demoqa.com/text-box");
                cy.title().should("eq","DEMOQA")
                cy.wait(1000)
            
                cy.get('#userName').should("be.visible").and("have.class", "mr-sm-2").then(()=>{
                cy.get('#userName').type("Alessandro del Piero")
    
    
    
        })
            
        })
                    
            Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
                 
     })

        it("Assert Lenght y el css", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html");
        cy.title().should("eq","Selenium Easy - Table with Pagination Demo")
        cy.wait(1000)
        

        cy.get("#myTable >tr >td").should("have.length", 91).and("have.css", "padding", "8px")
    
    
    
    })
     
        it.only("Contains", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=1500
        
        
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)
        

        cy.get('.form-group > #user-message').should("be.visible").type("Testeando ando por aqui")
        cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})
    
    
    
    })

    })//cierre describe
    