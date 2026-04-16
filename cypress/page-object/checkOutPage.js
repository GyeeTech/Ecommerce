class CheckOutPage {
    placeOrder() {
        cy.contains('button', 'Proceed to Checkout')
            .click()

        cy.get('[name="fullName"]').clear().type('Kwame Gyimah')
        cy.get('input[name="email"]')
        cy.get('[name="address"]').type('24 Trent Gardens')
        cy.get('input[name="city"]').type('London')
        cy.get('input[name="state"]').type('Essex')
        cy.get('input[name="zipCode"]').type('RM12 3TU')
        cy.get('input[name="country"]').type('UK')

        cy.contains('button', 'Place Order').click()

        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'Order Placed Successfully!')
        
    }
}
export default CheckOutPage