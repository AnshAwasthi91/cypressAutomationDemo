class SignInPage{

    elements={
        signInHeader: () =>  cy.get("form[name='signIn'] h1")
    }

    validateSignInFormHeading(){
        this.elements.signInHeader().click()
    }
}

module.exports = new SignInPage();