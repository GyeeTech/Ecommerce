class ProductDetailPage {
    viewProduct() {
        cy.get('button:contains("View Details")')
            .eq(4)
            .click()
        
        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'Noise-Cancelling Headphones')
    }
}
export default ProductDetailPage