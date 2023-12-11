import { DemoBlazePage } from '../pages/DemoBlazePage'
import * as products from './products.json'


describe('Demo Blaze Test', () => {

  it('Get all card titles', () => {
    cy.visit('https://demoblaze.com/')
    new DemoBlazePage().getAllCardData().then((allCardData) => {
      cy.wrap('').then(() => {
        expect(allCardData).to.be.eql(products)
      })
    })
  })

})
