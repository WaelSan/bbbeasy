describe('Test render of home page', () => {
    it('should render to login page if user is not logged in', () => {
        cy.visit('/home')
        cy.location('pathname').should('eq', '/login')
    })

    it('should render to login page if user has logged out', () => {
        cy.checkSubmittedForm('home') 
    })
})
