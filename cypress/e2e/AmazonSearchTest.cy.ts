import {AmazonHomePage} from "../models/pages/AmazonHomePage"
import {AmazonSearchResultPage} from "../models/pages/AmazonSearchResultPage"


describe ("Amazon search function", function(){
    it("search for a product", function() {
        const SEARCH_TEXT = "lip balm"
        cy.visit('https://www.amazon.com/')
        let amzHomePage = new AmazonHomePage()
        amzHomePage.search_text_box_elm.type(SEARCH_TEXT)
        amzHomePage.search_button_elm.click()

        let amzSearchResultPage = new AmazonSearchResultPage()
        amzSearchResultPage.searchItemElemList.should('have.length.at.least', 1)
    })
})
