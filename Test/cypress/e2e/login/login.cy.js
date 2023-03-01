import { faker } from '@faker-js/faker';

describe('Login', function () {
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();

    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"));
    }); 
    it('Login Success', function () {
        cy.LoginMariaCrack('liceth@liceth.com', '12345678', "Welcome liceth@liceth.com");      
    });

    it("Login fail", function () {
        cy.LoginMariaCrack(fakeEmail, fakePassword, "Log in")
    });
});