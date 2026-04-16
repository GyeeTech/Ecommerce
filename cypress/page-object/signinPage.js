class SignInPage {
    login() {
        // Store credentials as aliases
        cy.get('@credentials').then((credentials) => {
            cy.contains('Sign In').click()
            cy.get('#email').type(credentials.email)
            cy.get('#password').type(credentials.password)
            cy.contains('Sign In').click()
            cy.get('button[title="Sign Out"]').should('be.visible')         
        })
    }
}
//export const enterLogin = new SignInPage()
export default SignInPage