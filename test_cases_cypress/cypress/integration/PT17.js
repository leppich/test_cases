/// <reference types="cypress" />

describe("PT17", () => {
    it("Wprowadzenie niepoprawnego kodu pocztowego", () => {
        cy.openAndAcceptCookies();
        cy.get('[alt="toggle"]').click();
        cy.get('[role="listbox"]').contains('Polska').click();
        cy.get('#taxId').type('7543267113');
        cy.get('[data-testid="company-data-button"]').click();
        cy.get('#zipCode').type("1234").tab();
    })
})