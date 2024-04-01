/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

import 'cypress-file-upload'

require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')

describe ("Bucles for y Each",()=>{
    it("For uno", ()=>{

        for(let i=1; i<=100; i++){  // funcion para imprimir un numero del 1 al 10, i++ es para incrementar la variable
            cy.log("Numero: " + i)
 

        }
    })


        it("For dos", ()=>{

            for(let i=1; i<=10; i++){  // funcion para imprimir un numero del 1 al 10, i++ es para incrementar la variable
                let n=5
                cy.log(n + "x" + i + "=" + n*i)
      
            }
    
    })

        
    it("Each", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
        cy.title().should("eq", "Women - My Shop")

        cy.get(".product-name").each(($el,index,$list)=>{
           //cy.log($el.text())
            let vestido=$el.text()
            cy.log(vestido)

        })
        
    })

        it.only("Each Dos", ()=>{
            cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
            cy.title().should("eq", "Women - My Shop")
            cy.wait(2000)
           
            cy.get(".product-name").each(($el,index,$list)=>{
               //cy.log($el.text())
                let vestido=$el.text()
                if(vestido.includes("Blouse")){
                 cy.wrap($el).click()

                }
                

        
    
        })


        })
        




    })
