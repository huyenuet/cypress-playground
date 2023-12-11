import { SRHomePage } from "../pages/SRHomePage"

describe("Simply Recipes Test", function () {
    it("Check card title of hero section", function () {
        cy.visit('https://www.simplyrecipes.com')
        new SRHomePage().heroComponent().getCardTitle().then(title => {
            cy.wrap('').then(() => {
                expect(title).to.be.eq('Oh Henry Bars Are the Retro Dessert That Deserve a Comeback')
            })
        })
    })
})
