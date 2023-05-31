class ProductsPage{

    elements={
        resultHeader: () => cy.get('.s-messaging-widget-results-header span'),
        productsList: () => cy.get("img[alt='Apple iPhone 14 (128 GB) - Starlight']"),
        productImages: () => cy.get("div[class*='s-product-image-container'] img"),
        productLinks: () => cy.get("div[class*='s-product-image-container']")
    }

    validateSearchResults(){
        cy.get('.s-messaging-widget-results-header span').then((ele)=>{
            let header = ele.text().trim()
            expect(header).to.equal('Results')
            this.elements.productsList().should('have.length.at.least',1)
        })
    }

    clickOnProduct(){
        this.elements.productImages().each(($ele,index,$list1)=>{
            let altVal = $ele.prop('alt')
            if(altVal == 'Apple iPhone 14 (128 GB) - Starlight'){
                this.elements.productLinks().eq(index).find('a')
                                           .invoke('removeAttr','target').click()
                return false
    
            }
        })
    }

}

module.exports = new ProductsPage();