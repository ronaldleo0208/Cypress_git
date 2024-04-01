class ProyectoUnoPom {

    visitPage(){
        let tiempo=1000
        before(()=>{  
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html'),
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })

    }

    SeccionUno(name,lastname,email,t){
        let tiempo=t
        cy.get(":nth-child(2) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(name)
        cy.wait(tiempo)
        cy.get(":nth-child(3) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(lastname)
        cy.wait(tiempo)
        cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(email)
        cy.wait(tiempo)


    }

    SeccionDos(phone,dir1,city,t){
        let tiempo=t
        cy.get(":nth-child(5) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(phone)
        cy.wait(tiempo)
        cy.xpath("//input[@name='address']").clear().should("be.visible").type(dir1)
        cy.wait(tiempo)
        cy.get(":nth-child(7) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(city)
        cy.wait(tiempo)
        cy.get(".selectpicker").select("Please select your state").select("Texas")
        cy.wait(tiempo)


    }


    SeccionTres(zipcode,website,project,t){
        let tiempo=t
        cy.get(":nth-child(9) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(zipcode)
        cy.wait(tiempo)
        cy.get(":nth-child(10) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(website)
        cy.wait(tiempo)
        cy.get(':nth-child(2) > label > input').should("be.visible").click({force:true})
        cy.wait(tiempo)
        cy.get(":nth-child(12) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(project)
        cy.wait(tiempo)
        cy.get(".btn").should("be.visible").click({force:true})
        cy.wait(tiempo)


    }






}//final


export default ProyectoUnoPom;