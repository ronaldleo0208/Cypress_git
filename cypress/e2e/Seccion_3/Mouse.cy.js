///<reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath
import 'cypress-file-upload'



require('@4tw/cypress-drag-drop')


describe ("Cypress eventos con el mouse",()=>{


    it.only("Mouseover", () => {       
        let tiempo=3000
        
        
        /*cy.visit("https://www.way2automation.com/");
        cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
        cy.wait(tiempo)*/
        
        cy.visit("https://www.amazon.com/-/es/");
        cy.get('#nav-link-accountList').trigger("mouseover")
        cy.wait(tiempo)
        
        
        //cy.get("#menu-item-27597").should("contain", "Video Tutorial").trigger("mouseover")
        //cy.wait(tiempo)
        
        
        //eliminando ventana    
        //cy.get('.eicon-close').should("be.visible").click({froce:true})
      
         
        //cy.get('#menu-item-27597 > [href="https://www.selenium-tutorial.com/courses/"] > .menu-text').should("be.visible").trigger("mousedown,  { which: 1, pageX: 600, pageY: 100 }")
        //cy.wait(tiempo)

        //cy.contains("Selenium Python Video Tutorials").invoke("removeAttr","target").click()//esta funcion es cuando el menu abra otra pagina y remueves el atributo ver video 122
    })
    


    it("Mouse Slider", () => {   //coloca it y te va aparecer la sintaxis
        let tiempo=1500
        
        
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html");
        cy.title().should("eq","Selenium Easy - Drag and Drop Range Sliders")
        cy.wait(tiempo)

        cy.get('#slider1 > .range > input').invoke("attr", "value", "70")
        cy.wait(tiempo)
        cy.get('#slider3 > .range > input').invoke("attr", "value", "15")
        cy.wait(tiempo)
        cy.get('#slider5 > .range > input').invoke("attr", "value", "95")
        cy.wait(tiempo)
    })
})


