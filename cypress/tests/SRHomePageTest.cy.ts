describe("", function() {
    it("", function() {
        cy.visit('https://www.simplyrecipes.com')
        cy.get('.card__title').each(($title, index) => {
            cy.log(index.toString())
            cy.log($title.text().trim())
        })
    })
})