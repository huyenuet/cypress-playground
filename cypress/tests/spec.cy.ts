describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://app.filum.asia/')
    cy.get('#email').type("huyen.uet+oct12@gmail.com")
    cy.get('#password').type('Filum@2022')
    cy.get('[data-cy="login-button"]').click()
    
  })
})