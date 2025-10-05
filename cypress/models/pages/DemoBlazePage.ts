type CardData = {
    cardTitle: string;
    cardPrice: string;
}
export class DemoBlazePage {

    _getCardDetails() {
        let cardData: CardData = {
            cardTitle: '',
            cardPrice: ''
        };
        cy.get('.card-title').then($title => {
            cardData.cardTitle = $title.text().trim()
        })
        cy.get('h5').then($price => cardData.cardPrice = $price.text().trim())
        return new Cypress.Promise(resolve => resolve(cardData))
    }

    getAllCardData() {
        let allCardData = [];
        cy.get('.card').each($card => {
            cy.wrap($card).within(() => {
                this._getCardDetails().then(cardData => allCardData.push(cardData))
            })
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(allCardData))
        })
    }
}