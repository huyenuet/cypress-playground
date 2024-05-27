import { SRHomePage } from "../models/pages/SRHomePage"

describe("Simply Recipes Test", function () {
    it("Check card title of hero section", function () {
        cy.visit('https://www.simplyrecipes.com')
        new SRHomePage().heroComponent.getCardTitle().then(title => {
            cy.wrap('').then(() => {
                expect(title).to.be.eq('I’ve Used This FoodSaver Vacuum Sealer for 12 Years—It’s 30% Off During Amazon’s Big Spring Sale')
            })
        })
    })
})
