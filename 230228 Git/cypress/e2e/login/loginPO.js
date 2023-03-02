class LoginPO { // Creando una Clase, le asigno por nombre LoginPO. PO dicese de Page Object. 
    elements = { // Acá estoy creando un objeto, donde estoy almacenando los elementos/etiquetas  para dar click. 
        buttonLogin: () => cy.get("#login2"),
        modalLoginButton: () => cy.get("#logInModalLabel").contains('Log in'),
        loginUserName: () => cy.get("#loginusername"),
        loginPassword: () => cy.get("#loginpassword"),
        buttonStartSession: () => cy.get("button").contains('Log in'),
        body: () => cy.get("body")
    }

    buttonLoginNav() { // Acá estoy creando un método/función para acceder a los elementos y que desde el orquestador (el archivo de pruebas, el cy.js) yo pueda ingresar.
        return this.elements.buttonLogin() // return = regresame este elemento (this.elements) y el método creado por cada elemento/etiqueta. 
    }

    modalLogin() {
        return this.elements.modalLoginButton()
    }

    inputUserName() {
        return this.elements.loginUserName()
    }

    inputPassword() {
        return this.elements.loginPassword()
    }

    startSession() {
        return this.elements.buttonStartSession()
    }

    assertBody() {
        return this.elements.body()
    }

}

export default LoginPO // Exportando la clase. Esto toca hacerlo porque sino no sicve el código este. 