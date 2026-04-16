class SignUpPage{
    RegistrationFormPage(){
            const uniqueEmail = `testuser_${Date.now()}@test.com`
            const password = 'tester_21!'
            
            // Store credentials as aliases
            cy.wrap({ email: uniqueEmail, password }).as('credentials')
            
            cy.contains('Sign In').click()
            cy.contains('have an').click()
            cy.get('#email').type(uniqueEmail)
            cy.get('#password').type(password)
            cy.contains('Sign Up').click()
            cy.get('button[title="Sign Out"]').should('be.visible')
            
    }
    logout() {
        cy.get('button[title="Sign Out"]').click()
        cy.contains('Sign In').should('be.visible')
    }
}
//export const setUp = new SignUpPage()
export default SignUpPage