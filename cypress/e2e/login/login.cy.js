describe('Login', function () {

    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"));
        cy.fixture('Login.json').as('fx')
        
    }); 
    it('Login Success', function () {
        cy.LoginMariaCrack(this.fx[0].un, this.fx[0].pass, this.fx[0].body);      
    });
    it('Login fail', function () {
        cy.LoginMariaCrack(this.fx[1].un, this.fx[1].pass, this.fx[1].body);      
    });
});