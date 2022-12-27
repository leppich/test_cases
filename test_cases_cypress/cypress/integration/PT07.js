/// <reference types="cypress" />

describe("PT07", () => {
    it("Podanie numeru NIP bez udostępnionych danych", () => {
        cy.openAndAcceptCookies();
        cy.get('[alt="toggle"]').click();
        cy.get('[role="listbox"]').contains('Polska').click();
        cy.get('#taxId').type('7543267113');
        cy.get('[data-testid="company-data-button"]').click();
    })
})