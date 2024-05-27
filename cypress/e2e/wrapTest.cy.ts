const myPromise = new Promise((resolve, reject) => {
  // we use setTimeout(...) to simulate async code.
  setTimeout(() => {
    resolve({
      type: 'success',
      message: 'It worked!',
    })
  }, 2500)
})

it('should wait for promises to resolve', () => {
  cy.wrap(myPromise).its('message').should('eq', 'It worked!');
  cy.wrap(myPromise).its('type').should('eq', 'success');
})

const getName = () => {
  return 'Jane Lane'
}

it('should match the name', () => {
  cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane') // true
})