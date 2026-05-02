class OrderPage {
    viewOrderDetails() {
        cy.contains('button','Orders')
        .click()

        cy.get('h1')
        .should('be.visible')
        .and('have.text', 'Order History')

        cy.contains('span', 'Pending')
        .should('be.visible')                   // Assert it's visible on the page
        .and('have.class', 'bg-yellow-100')     // Assert it has a specific class (e.g., for its color/status)
        .and('have.class', 'text-yellow-800')

        cy.get('svg.lucide-chevron-down')
        .click()
    }
}
export default OrderPage