import { DemoBlazePage } from '../pages/DemoBlazePage'
import products from './products.json'


describe('Demo Blaze Test', () => {

  it('Check products\'s details on UI is the same with a pre-defined Product list', () => {
    cy.visit('https://demoblaze.com/')
    new DemoBlazePage().getAllCardData().then((allCardData) => {
      cy.wrap('').then(() => {
        expect(allCardData).to.be.eql(products)
      })
    })
  })

  it('Check products\'s details on UI is the same with API\'s response', () => {
    cy.visit('https://demoblaze.com/')
    cy.intercept('/entries').as('entries') // alias
    cy.wait('@entries')
    cy.get('@entries').then(entries => {
      let apiProducts = entries.response.body.Items
      apiProducts = apiProducts.map(item => {
          return {
            cardTitle: item.title.replace('\n', ''),
            cardPrice: `$${item.price}`
          }
      })
      // cy.log(JSON.stringify(apiProducts))
      new DemoBlazePage().getAllCardData().then((allCardData) => {
        cy.wrap('').then(() => {
          expect(allCardData).to.be.eql(apiProducts)
        })
      })
    })
  })
})
