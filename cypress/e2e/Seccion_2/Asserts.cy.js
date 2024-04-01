/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

describe ("Asserts",()=>{


    it("Asserts Contains", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should("eq","My Shop")
        cy.wait(1000)

        cy.get("#block_top_menu").should("be.visible").contains("Women").click()
   
        })
    
    
    
        it("Asserts Find, eq", () => {   //coloca it y te va aparecer la sintaxis
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");
        cy.title().should("eq","Women - My Shop")
        cy.wait(1000)

        cy.get(".product-container").find(".product-image-container").eq(2).click() //la funcion eq es la posicion del array

        
   
        })


        it.only("Asserts Find, eq, validando que el vestido es nuevo y el precio", () => {   //coloca it y te va aparecer la sintaxis
            cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");
            cy.title().should("eq","Women - My Shop")
            cy.wait(1000)
    
            cy.get(".product-container").find(".product-image-container").eq(2).click() //la funcion eq es la posicion del array
            cy.get("#product_condition .editable").then((e)=>{
                cy.log(e.text())
                let estado=e.text()
                cy.log(estado)
                if (estado=="New product"){
                cy.log("El Vestido ES Nuevo")

           }

            cy.get("#our_price_display").then((e)=>{
                cy.log(e.text())
                let precio=e.text()
                cy.log(precio)
                precio=precio.slice(1,3)  //la funcion slice es para seleccionar elementos, en este caso para eliminar el signo $
                cy.log(precio)
                if (precio>=30){
                cy.log("Esta muy caro no tengo tanto dinero")
                }else{
                cy.log("Si me alcanza el dinero, lo compro")

                }
                  

         




            })
        
      
      
        })
        
        


       })

      
    
        })
    
            