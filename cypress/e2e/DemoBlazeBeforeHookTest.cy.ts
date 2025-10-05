import { DemoBlazePage } from '../models/pages/DemoBlazePage'
import { HomePageAPI } from '../support/HomePageAPI'


describe('Demo Blaze Test', () => {

  beforeEach('Intercept the entries API, get all the products', () => {
    cy.visit('https://demoblaze.com/')
  })

  it('Check product list on Home page', () => {
    new HomePageAPI().getHomePagePhones().then(({ response }) => {
      const phoneList = response.body.Items.map(item => {
        return {
          cardTitle: item.title.replace('\n', ''),
          cardPrice: `$${item.price}`,
        }
      })
      new DemoBlazePage().getAllCardData().then(allCardData => {
        cy.wrap('').then(() => {
          expect(allCardData).to.be.eql(phoneList)
        })
      })
    })
  })

  it('Check laptop list on Laptop page', () => {
    // Intercept the bycat API, get all the laptops info
    cy.get('[onclick="byCat(\'notebook\')"]').click()
    new HomePageAPI().getHomePageLaptops().then(({ response }) => {
      const laptops = response.body.Items.map(item => {
        return {
          cardTitle: item.title.replace('\n', ''),
          cardPrice: `$${item.price}`,
        }
      })
      new DemoBlazePage().getAllCardData().then(allCardData => {
        cy.wrap('').then(() => {
          expect(allCardData).to.be.eql(laptops)
        })
      })
    })
  })
})
