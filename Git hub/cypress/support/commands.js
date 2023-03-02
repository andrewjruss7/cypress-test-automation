import LoginPO from "../e2e/login/loginPO"; // Importar (traer el archivo donde está mi clase.)

const login = new LoginPO() // Instanciando la clase; construyendo la clase y almaceno la clase dentro de una constante. 

Cypress.Commands.add("LoginMariaCrack", function (user, password, assert) { // Cree un comando para agregar una función/método que puedo utilizar varias veces.
    login.buttonLoginNav().click(); // login. = Acá estoy accediendo a los métodos que tengo en la clase para seleccionar los elementos clickeables. 
    login.modalLogin().should('be.visible');

    login.inputUserName().type(user, { force: true }).should('have.value', user);
    login.inputPassword().type(password, { force: true }).should('have.value', password);

    login.startSession().click();

    login.assertBody().contains(assert).should('be.visible');
});
