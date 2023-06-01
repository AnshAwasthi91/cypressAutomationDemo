class ShopPage{

    elements={
        addToCartBtn: () => cy.get('#add-to-cart-button'),
        buyBtn: () => cy.get('#buy-now-button'),
        addedToCartText: () => cy.get('#attachDisplayAddBaseAlert span', { timeout: 20000 }),
        itemCountText: () => cy.get('#attach-accessory-cart-total-string'),
        amountText: () => cy.get('#attach-accessory-cart-subtotal'),
        checkoutBtn: () => cy.get("input[aria-labelledBy='attach-sidesheet-checkout-button-announce']")

    }

    validateAddToCartButton(buttonName){
        this.elements.addToCartBtn().as('addCartBtn').should('be.visible')
        cy.get('@addCartBtn').should('be.enabled')
        cy.log(buttonName+" button is visible & enabled")
    }

    vaidateBuyButton(buttonName){
        this.elements.buyBtn().as('buyNowBtn').should('be.visible')
        cy.get('@buyNowBtn').should('be.enabled')
        cy.log(buttonName+" button is visible & enabled")
    }

    addProductToCart(){
        this.elements.addToCartBtn().click()
    }

    validateProductAddedToCart(){
        this.elements.addedToCartText().should('be.visible')
        this.elements.addedToCartText().should('include.text','Added to Cart')
        this.elements.itemCountText().should('include.text','1 item')
        this.elements.amountText().then((element)=>{
            const amount = element.text()
            cy.log(amount)
            assert.isNotNull(amount)
        })
    }

    checkoutProduct(){
        this.elements.checkoutBtn().click()
    }

}

module.exports = new ShopPage();