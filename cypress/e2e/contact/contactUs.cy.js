describe('Contact Us test', () => { 


    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"));
    }); 

it('Contact us test', () => {

    
    cy.ContactUsCommand('test@test.com', 'Ivonne');


})
})