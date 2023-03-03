describe('Login', function () {

    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"));
        cy.fixture('Login.json').as('Logindata')
        
    }); 
    it('Login Success', function () {
        cy.LoginMariaCrack(this.Logindata[0].user, this.Logindata[0].pass, this.Logindata[0].body);      
    });
    it('Login fail', function () {
        cy.LoginMariaCrack(this.Logindata[1].user, this.Logindata[1].pass, this.Logindata[1].body);      
    });
});