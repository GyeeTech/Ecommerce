class AppCartPage {
    viewCart() {
        cy.get('button:contains("Cart")')
            .click()
    }
}
export default AppCartPage