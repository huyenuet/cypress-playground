export class HomePageAPI {
    getHomePagePhones() {
        cy.intercept('/entries').as('entries')  // make an alias
        return cy.wait('@entries', {timeout: 10000}) // wait for the alias
    }

    getHomePageLaptops() {
        cy.intercept('POST', '/bycat').as('bycat')
        return cy.wait('@bycat')
    }
}