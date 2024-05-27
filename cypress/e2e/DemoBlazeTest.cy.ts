import { DemoBlazePage } from '../models/pages/DemoBlazePage'
import products from './products.json'
import { HomePageAPI } from '../support/HomePageAPI'


describe('Demo Blaze Test', () => {
  beforeEach(() => {
    cy.visit('https://demoblaze.com/');
  })

  let apiPhones;

  it('Check products\'s details on UI is the same with a pre-defined Product list', () => {
    new DemoBlazePage().getAllCardData().then((allCardData) => {
      cy.wrap('').then(() => {
        expect(allCardData).to.be.eql(products)
      })
    })
  })

  it.only('Check products\'s details on UI is the same with API\'s response', () => {
    new HomePageAPI().getHomePagePhones().then(phones => apiPhones = phones)

    let productList = apiPhones.response.body.Items
    productList = productList.map(item => {
      return {
        cardTitle: item.title.replace('\n', ''),
        cardPrice: `$${item.price}`,
      }
    })

    // cy.log(JSON.stringify(apiProducts))
    new DemoBlazePage().getAllCardData().then((allCardData) => {
      cy.wrap('').then(() => {
        expect(allCardData).to.be.eql(productList)
      })
    })
  })
})
