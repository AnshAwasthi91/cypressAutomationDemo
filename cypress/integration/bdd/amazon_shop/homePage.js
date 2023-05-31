class Homepage{

    elements={
        searchField: () => cy.get('#twotabsearchtextbox'),
        searchIcon: () => cy.get('#nav-search-submit-button')
    }

    launchApp(){
        cy.visit("https://www.amazon.in/")
        cy.url().should('include','amazon')
    }

    enterProductInSearchTextBox(product){
        this.elements.searchField().type(product)
    }

    clickSearchIcon(){
        this.elements.searchIcon().click()
    }

}

module.exports = new Homepage();