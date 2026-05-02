class ProducetManagementPage{
    admin(){
        cy.contains('button', 'Admin').click()
        cy.contains('button', 'Add Product').click()
        cy.get('[name="name"]').clear().type('Mary Jane Shoes')
        cy.get('[name="category"]').clear().type('Kids')
        cy.get('[name="price"]').clear().type('29.99')
        cy.get('[name="stock"]').clear().type('12')
        cy.get('[name="image_url"]').clear().type('https://media2.newlookassets.com/i/newlook/923788001/womens/footwear/shoes/black-patent-t-bar-mary-jane-shoes.jpg?strip=true&qlt=50&w=720')
        cy.get('[name="description"]').clear().type('Description')
        cy.contains('button', 'Save').click()

    }
}
export default ProducetManagementPage