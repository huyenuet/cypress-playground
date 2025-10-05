describe('Dropdown Test', () => {
    it('should select an option from the dropdown', () => {
        // Visit the page
        cy.visit('https://the-internet.herokuapp.com/dropdown');

        cy.get('#dropdown option').each(($option) => {
            cy.log(`Option: ${$option.text()}, Currently selected: ${$option.prop('selected')}`);
        })

        // Select an option from the dropdown
        cy.get('#dropdown').select('Option 1');

        // Assert that the correct option is selected
        cy.get('#dropdown').should('have.value', '1');

        cy.get('#dropdown option').each(($option) => {
            cy.log(`Option: ${$option.text}, Currently selected: ${$option.prop('selected')}`);
        })
    });
});