class ContactPO {
    elements = {
        buttonContact: () => cy.get('a[data-target="#exampleModal"]'),
        inputContactEmail: () => cy.get('#recipient-email'),
        inputContactName: () => cy.get('#recipient-name'),
        inputMessage: () => cy.get('#message-text'),
        buttonSend: () => cy.get('button[onclick="send()"]')
    }
    buttonContactUs() {

        return this.elements.buttonContact()
    }

    inputEmail(){
        return this.elements.inputContactEmail()
    }
    inputName() {
        return this.elements.inputContactName()
    }
    inputText() {
        return this.elements.inputMessage()
    }
    buttonSendMessage() {
        return this.elements.buttonSend()
    }
}
export default ContactPO