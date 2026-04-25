class NewProductPage{
    newStock(){
        cy.contains('button', 'Admin').click()
        cy.contains('button', 'Add Product').click()
        cy.get('[name="name"]').clear().type('Airpods')
        cy.get('[name="category"]').clear().type('Electronics')
        cy.get('[name="price"]').clear().type('179.99')
        cy.get('[name="stock"]').clear().type('20')
        cy.get('[name="image_url"]').clear().type('https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/e3d83ef6-ca98-456b-bfeb-653f8cfa0ac4-1_5e7c8bff-96e0-4937-a052-d8ddbbba0533.jpg')
        cy.get('[name="description"]').clear().type('Description')
        cy.contains('button', 'Save').click()

    }
}

export default NewProductPage