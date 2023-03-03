describe('Login', function () {

    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"));
    }); 
    it('Login Success', function () {
        cy.LoginMariaCrack('liceth@liceth.com', '12345678', "Welcome liceth@liceth.com");      
    });

    it("Login fail", function () {
        cy.LoginMariaCrack('test@fake.com', 'fake123', "Log in")
    });
});