describe("Within and Find methods", function() {
    it("Within method", function() {
        cy.visit('https://www.simplyrecipes.com')
        // scope down the dom, then find any elements inside this scope
        cy.get(".showcase__hero").within(() => {
            cy.get('.card__title').each(($title, index) => {
                cy.log(index.toString())
            })
        })
    })
    it("Find method", function() {
        cy.visit('https://www.simplyrecipes.com')
        // find a scope, then find another element within it
        cy.get('.showcase__hero').find(".card__title").each(($cardTitle, index) => {
            cy.log(index.toString())
            cy.get('.card__title').each(($title, index) => {
                cy.log(index.toString())
            })
        })
    })
})