export class HomePageAPI {
    getHomePagePhones() {
        cy.intercept('/entries').as('entries')  // make an alias
        cy.wait('@entries')
        return cy.get('@entries')
    }

    // static getHomePageLaptops() {
    //     cy.intercept('POST', '/bycat').as('bycat')
    //     cy.wait('@bycat')
    //     return cy.get('@bycat')
    // }
}