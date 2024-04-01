describe ("Bienvenido al curso de cypress seccion 1",()=>{

    it('mi primer Test --> Hola Mundo', () => {   //coloca it y te va aparecer la sintaxis
        cy.log("hola mundo");   // cy.console es para imprimir en consola
        cy.wait(1500) // wait es el tiempo que tarda entre ejecucion y esta en milisegundos
    })

    it('Segundo test --> campo name', () => {
        cy.visit('https://demoqa.com/text-box'); //este comando es para visitar o abrir la pagina
        
        Cypress.on('uncaught:exception', (err, runnable) => { //realice este procedimiento porque la pagina tiene un error que no le permite a cypress correr el test
            // returning false here prevents Cypress from 
            // failing the test
            return false
          })
        
       cy.get("#userName").type("Ronald") // entra a la pagina y buscame el siguiente elemento, el type es para escribir lo que desees en ese campo
       cy.wait(1500)
    
    
    })
    
    
    
    })   // cierre de describe