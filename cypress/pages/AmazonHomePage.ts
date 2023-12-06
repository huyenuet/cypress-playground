const SEARCH_TEXT_BOX_SEL = "#twotabsearchtextbox"
const SEARCH_BUTTON_SEL = "#nav-search-submit-button"

export class AmazonHomePage {
    search_text_box_elm(){
        return cy.get(SEARCH_TEXT_BOX_SEL)
    }
    search_button_elm(){
        return cy.get(SEARCH_BUTTON_SEL)
    }
}
