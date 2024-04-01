/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Nueva Seccion Checkbox",()=>{

    it("Seleccionar todos los checkbox y uncheck", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html");
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get("[type='checkbox']").check().should("be.checked") //fucncion para presionar los check box /be checked para saber si todos fueron chequeados
        cy.wait(1000)
        
        cy.get("[type='checkbox']").uncheck({force: true}).should("not.be.checked") // funcion para que sean deschequeados
        cy.wait(1000)
    
    
    
    })

    it("Seleccionar un solo checkbox", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html");
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        //cy.get('#isAgeSelected').check().should("be.checked")  //funcion para hacer check
        //cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[3]/label/input").check()
    
        cy.get('#isAgeSelected').click() // tambien puedes seleccionar el checkbox con la funcion click
        cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[3]/label/input").click()
    
    })
 
    
    
    })   // cierre de describe