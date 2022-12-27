/// <reference types="cypress" />

describe("PT05", () => {
    it('Brak podanych danych z wyjątkiem pól "Kraj" oraz "NIP"', () => {
        cy.openAndAcceptCookies();
        cy.get('#email').click();
        cy.get('#login').click();
        cy.get('#password').click()
        cy.get('#phone').click();
        cy.get('[alt="toggle"]').click();
        cy.get('[role="listbox"]').contains('Polska').click();
        cy.get('#taxId').type('6641794988');
        cy.get('[data-testid="company-data-button"]').click();
        cy.wait(1000);
        cy.get('#agreementTerms').check({force: true});
    })
})