/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

import 'cypress-file-upload'




require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


describe ("Elementos de una tabla",()=>{
it("CHILDREN", ()=>{
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
    cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
    let t=1500
   
        cy.get(".btn-group").children(".btn-success").should("contain", "Green").click({force:true})
        cy.wait(t)
        cy.get(".btn-group").children(".btn-danger").should("contain", "Red").click({force:true})
        cy.wait(t)

    })
    
    it("SELECCIONAR POR MEDIO DE EQ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get("[type='button']").eq(3).should("contain", "Red").click({force:true})
        cy.wait(t)
        cy.get("[type='button']").eq(4).should("contain", "All").click({force:true})
        cy.wait(t)        
        
    })

    it("SELECCIONAR POR MEDIO DE FILTER ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get("[type='button']").filter(".btn-success").click()
        cy.wait(t)
        cy.get("[type='button']").filter(".btn-danger").click()
        cy.wait(t)        
        
    })
    it("SELECCIONAR POR MEDIO DE FIND ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get(".btn-group").find(".btn-success").should("contain", "Green").click()
        cy.wait(t)
        //cy.get("[type='button']").filter(".btn-danger").click()
        //cy.wait(t)        
    
    
    }) 

    it("SELECCIONAR POR MEDIO DE FIRST & LAST ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get(".btn-group").find("button").first().click()
        cy.wait(t)
        cy.get(".btn-group").find("button").last().click()
        cy.wait(t)
             
    
    
    }) 

    it("SELECCIONAR POR MEDIO DE NEXTALL ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get("[type='button']").should("contain", "Green")
        cy.wait(t)
        cy.get("[type='button']").should("contain", "Green").nextAll().should("have.length", 4)
        cy.wait(t)
             
    
    
    }) 

    it("SELECCIONAR POR MEDIO DE NEXTALL ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get("[type='button']").parent().should("have.class", "btn-group")
        cy.wait(t)
       // cy.get("[type='button']").should("contain", "Green").nextAll().should("have.length", 4)
        //cy.wait(t)
             
    
    
    }) 

    
    it("RETO SELECCIONAR TODOS LOS ELEMENTOS DE LA PAGINA CON LAS TABLAS", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        cy.get("[type='button']").eq(1).should("contain", "Green").click({force:true})
        cy.wait(t)
        cy.get("[type='checkbox']").check({force:true})
        cy.wait(t)
       
        cy.get("[type='button']").eq(4).should("contain", "All").click({force:true})
        cy.wait(t)
        cy.get("[type='checkbox']").check({force:true})
        cy.wait(t)
       
    
    
    }) 

    it.only("RETO SELECCIONAR TODOS LOS ELEMENTOS DE LA PAGINA CON LAS TABLAS CON UN FOR", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        for (let x=1;x<=4;x++){
            cy.get("[type='button']").eq(x).click({force:true})
            cy.wait(t)
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(t)


        }
       
       
    
    
    }) 

    it("RETO SELECCIONAR TODOS LOS ELEMENTOS DE LA PAGINA CON LAS TABLAS CON UN FOR Y ASSERTS", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let t=3000
       
        for (let x=1;x<=4;x++){
            let NombreButton=""

            if(x==1){
                NombreButton="Green"
            }
            if(x==2){
                NombreButton="Orange"
            }
            if(x==3){
                NombreButton="Red"
            }
            if(x==4){
                NombreButton="All"
            }
            
            
            cy.get("[type='button']").eq(x).should("contain", NombreButton).click({force:true})
            cy.wait(t)
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(t)


        }
       
       
    
    
    }) 



})