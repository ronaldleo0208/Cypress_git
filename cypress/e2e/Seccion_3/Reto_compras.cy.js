/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

import 'cypress-file-upload'



require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')



/*it.only("Reto Compras", ()=>{
    cy.visit("https://opencart.abstracta.us/")
    cy.title().should("eq","Your Store")
    let t=1500
    cy.wait(t)
   
    //cy.contains("MacBook").click({force:true})
   
    for (let x=0; x<=3; x++){
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').eq(x).click({force:true})
        cy.wait(t)

    } 

    })*/

    /*it("Reto Compras seleccionando cuatro items", ()=>{
    cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
    cy.title().should("eq","Women - My Shop")
    let t=1500
    cy.wait(t)
   
    
   
    for (let x=0; x<=2; x++){
        cy.get("#center_column .product-name").eq(x).click({force:true})
        cy.wait(t)
        
        cy.get("#group_1").select("M").should("have.value","2")
        cy.wait(t)        
        cy.get("#quantity_wanted").clear().type("4")
        cy.wait(t)
        cy.get('.exclusive > span').should("be.visible").click({force:true})
        cy.wait(t)
        cy.xpath("//span[contains(.,'Proceed to checkout')]").should('be.visible').click({force:true})
        cy.wait(t)
        cy.xpath("//a[contains(@title,'Women')]").should("be.visible").click({force:true})
   
   
    }*/


    it.only("Reto Compras", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
        cy.title().should("eq","Women - My Shop")
        let t=1000
        cy.wait(t)
        const datos=[];
        
        
        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            datos[index]=$el.text()
            cy.log(datos.length)

        
        }).then(()=>{
            for (let x=0; x<=datos.length; x++){
                cy.get("#center_column .product-name").eq(x).click({force:true})
                cy.wait(t)
                
                cy.get("#group_1").select("M").should("have.value","2")
                cy.wait(t)        
                cy.get("#quantity_wanted").clear().type("4")
                cy.wait(t)
                cy.get('.exclusive > span').should("be.visible").click({force:true})
                cy.wait(t)
                cy.xpath("//span[contains(.,'Proceed to checkout')]").should('be.visible').click({force:true})
                cy.wait(t)
                cy.xpath("//a[contains(@title,'Women')]").should("be.visible").click({force:true})


            }
        
        
            })
       
        })

    

