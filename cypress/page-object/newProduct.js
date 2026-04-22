class NewProduct{
    newStock(){
        cy.contains('button', 'Admin').click()
        cy.contains('button', 'Add Product')

    }
}

export default NewProduct