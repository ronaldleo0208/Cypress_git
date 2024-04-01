/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Reto Asserts",()=>{


    it("Reto numero 1 asserts", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=1500
        
        
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)

        let a=5
        let b=5+a
        
        cy.get('#value1').should("be.visible").and("have.class","form-control").type(a)
        cy.get('#value2').should("be.visible").and("have.class","form-control").type(b)
        cy.contains("[type='button']", "Get Total").should("be.visible").click({force:true})

        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let r = a+b
            cy.log("El valor de r: "+r)
            cy.log(e.text())
            let res=e.text()

            if(r==res){
                cy.log(" Son Iguales")
            }else{
                cy.log("No son Iguales")
            }

            if(res>50)
            {
                a=a-20
                b=b-100
                cy.get('#value1').should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get('#value2').should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                cy.contains("[type='button']", "Get Total").should("be.visible").click({force:true}) 
            }else{
                a=a+5
                b=b+10
                cy.get('#value1').should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get('#value2').should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                cy.contains("[type='button']", "Get Total").should("be.visible").click({force:true})

            }


        })
       
   
        })

    }) // cierre describe