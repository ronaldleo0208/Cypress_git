/// <reference types="Cypress" /> 
// para que funcione los comandos

require('cypress-xpath');  //debes colocar esto siempre para utilizar los xpath

import 'cypress-file-upload'





require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')


    /*it("MOSTRANDO TODOS LOS CAMPOS DE LA TABLA ", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
        let t=3000
   
        const datos=[]
            cy.get(".odd td, .even td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
            cy.log(datos[i])

        }



    })

    it("SUMANDOS LOS VALORES CON LA CLASE ODD & EVEN", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
        let t=3000
       
        const datos=[]
        let cantidadOddEven=0
            
        
        //cy.get(".odd td, .even td").each(($el,index,$list)=>{
        cy.get("[role='row'] td").each(($el,index,$list)=>{     //haciedo que sume los valores pero con tr role
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOddEven+=Number(datos[i])

                }
    
            }
            cy.log("La cantidad total es: " +cantidadOddEven)
            expect(cantidadOddEven).to.eq(394)
    
    
        }) */


    it.only("VALOR DE UN CAMPO EN ESPECIFICO", ()=>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
        let t=3000
           
        const campo=cy.get('tbody > :nth-child(7) > :nth-child(2)')
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)

            if(dato.includes("Javascript Developer")){
                campo.eq(index).next().next().then((age)=>{
                const Edad=age.text()
                cy.log(Edad)
                cy.log(" La Edad de Javascript Developer es: "+ Edad)
                expect(Edad).to.equal('39')


                })


            }


        })
    
                
            
       
    
        
    


    
    })

 
   


