describe('Login', function () {

    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"));
        cy.fixture('Login.json').as('fx')
        
    }); 
    it('Login Success', function () {
        cy.LoginMariaCrack(this.fx.username, this.fx.password, this.fx.body);      
    });
    it('Login fail', function () {
        cy.LoginMariaCrack(this.fx.username1, this.fx.password1, this.fx.body1);      
    });
});
