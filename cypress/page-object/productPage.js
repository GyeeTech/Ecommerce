class ProductPage {
    addToCart(quantity = 3) {
        // Click plus button, (quantity)number of times 
        for (let i = 1; i < quantity; i++) {
            cy.get('button:has(.lucide-plus)').eq(4).click()
        }
        cy.get('button:contains("Add")').eq(4).click()
    }
}
export default ProductPage