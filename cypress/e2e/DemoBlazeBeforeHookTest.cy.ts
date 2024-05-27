import { DemoBlazePage } from '../models/pages/DemoBlazePage'
import {HomePageAPI} from '../support/HomePageAPI'


describe('Demo Blaze Test', () => {

  let apiPhones
  let apiLaptops

  before('Intercept the entries API, get all the products', () => {
    cy.visit('https://demoblaze.com/')
    HomePageAPI.getHomePagePhones().then(phones => apiPhones = phones)
  })

  it('Check product list on Home page', () => {
      let productList = apiPhones.response.body.Items
      productList = productList.map(item => {
        return {
          cardTitle: item.title.replace('\n', ''),
          cardPrice: `$${item.price}`,
        }
      })
      new DemoBlazePage().getAllCardData().then(allCardData => {
        cy.wrap('').then(() => {
          expect(allCardData).to.be.eql(productList)
        })
      })
  })

  // before('Intercept the bycat API, get all the laptops info', () => {
  //   cy.visit('https://demoblaze.com/')
  //   cy.get('[onclick="byCat(\'notebook\')"]').click()
  //   HomePageAPI.getHomePageLaptops().then(laptops => apiLaptops = laptops)
  // })

  // it('Check laptop list on Laptop page', () => {
  //   cy.log(JSON.stringify(apiLaptops.response.body.Items))
  //   let laptops = apiLaptops.response.body.Items
  //   laptops = laptops.map(item => {
  //     return {
  //       cardTitle: item.title.replace('\n', ''),
  //       cardPrice: `$${item.price}`,
  //     }
  //   })
  //   new DemoBlazePage().getAllCardData().then(allCardData => {
  //     cy.wrap('').then(() => {
  //       expect(allCardData).to.be.eql(laptops)
  //     })
  //   })
  // })
})
