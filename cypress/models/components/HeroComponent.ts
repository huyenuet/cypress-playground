export class HeroComponent {
    static CONTAINER_SEL = '.showcase-hero';
    container;
    
    // TODO: change the syntax to Typescript
    constructor(container) {
        this.container = container;
    }
    
    getCardTitle() {
        let cardTitle = '';
        this.container.find(".card__title").then($title => {
            cardTitle = $title.text().trim()
        })
        // I have no idea what I'm writing
        return new Cypress.Promise(resolve => cy.wrap('').then(() => resolve(cardTitle)))
    }

}