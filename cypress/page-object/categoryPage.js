class ProductCategoryPage {
    selectCategory() {
        // Locate the <select> element first (e.g., by its class)
        //cy.get('select.px-4.py-3.border').select('3') // 3 is the 0-based index for the 4th option
        cy.get('select[class*="px-4"]').select('Accessories')  //changes have been made to select specific category as the previous one was flaky
        .should('have.value', 'Accessories') // Assert the <select> element's value attribute
        .and('be.visible')                   // Assert the <select> element is visible
        .find('option:selected')             // Find the currently selected <option> element
        .should('have.text', 'Accessories') // Assert its visible text

    }
}
export default ProductCategoryPage