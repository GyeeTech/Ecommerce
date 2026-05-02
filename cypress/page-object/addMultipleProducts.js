class AddMultipleItemsPage{
    addMultipleItems(){
        for (let i = 0; i < 5; i++){
            cy.get('button').find('svg.lucide-plus').eq(1).click()
        }
        cy.contains('div', 'Wireless Mouse').find('button').contains('Add').click()
    }
}

export default AddMultipleItemsPage