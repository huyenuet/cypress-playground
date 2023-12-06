const RESULT_ITEM_SEL = 'div[cel_widget_id^="MAIN-SEARCH_RESULTS"]'

export class AmazonSearchResultPage {
    searchItemElemList() {
        return cy.get(RESULT_ITEM_SEL)
    }
}
