import LoginPO from "../e2e/login/loginPO"; // Importar (traer el archivo donde está mi clase.)
import ContactPO from "../e2e/contact/contact.PO";



const login = new LoginPO() // Instanciando la clase; construyendo la clase y almaceno la clase dentro de una constante. 

Cypress.Commands.add("LoginMariaCrack", function (user, password, assert) { // Cree un comando para agregar una función/método que puedo utilizar varias veces.
    login.buttonLoginNav().click(); // login. = Acá estoy accediendo a los métodos que tengo en la clase para seleccionar los elementos clickeables. 
    login.modalLogin().should('be.visible');

    login.inputUserName().type(user, { force: true }).should('have.value', user);
    login.inputPassword().type(password, { force: true }).should('have.value', password);

    login.startSession().click();

    login.assertBody().contains(assert).should('be.visible');
});


const ContactUS = new ContactPO()

Cypress.Commands.add('ContactUsCommand', (email, name ) => {

    ContactUS.buttonContactUs().click();

    ContactUS.inputEmail().type(email , {force:true}).should('have.value' , email);
    ContactUS.inputName().type(name , {force:true}).should('have.value', name);
    ContactUS.inputText().type('This is a test', {force:true}).should('have.value', 'This is a test');

    ContactUS.buttonSendMessage().click();

})


