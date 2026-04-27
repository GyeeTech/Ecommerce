class ProductDetailPage {
    viewProduct() {
        cy.contains('h3', 'Noise-Cancelling Headphones')
        .closest('.bg-white')
        .find('button')
        .contains('View Details')
        .click()
        
        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'Noise-Cancelling Headphones')
    }
}
export default ProductDetailPage