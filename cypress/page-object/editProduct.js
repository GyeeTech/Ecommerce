class EditProduct{
    updateProductDetail(){
        cy.contains('button', 'Admin').click()
        cy.get('.lucide-square-pen')
    }
}
export default EditProduct