
import ProyectoUnoPom from '../../support/Page_ObjectM/ProyectoUnoPom.cy';
/// <reference types='Cypress' />
 import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require ('cypress-plugin-tab')
require('cypress-xpath');



   
describe ('POM Project', ()=>{

    const master=new ProyectoUnoPom()

    master.visitPage()

    it('test seccion uno', () => {
       master.SeccionUno("Cristiano","Ronaldo","Ronaldo@gmail.com",2000)

    
    })
   
    it('test seccion dos', () => {
        master.SeccionDos("ab","Las minas","San Antonio",1000)
        cy.Validar_campo2("//small[contains(@data-bv-result,'INVALID')]","Please supply a vaild phone number with area code","phone",1000)
     
     })

     it('test seccion tres', () => {
        master.SeccionTres("1234","www.cr7ano.com","website of the goat",1000)
 
     
     })

});

    