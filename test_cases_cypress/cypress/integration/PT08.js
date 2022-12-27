/// <reference types="cypress" />

describe("PT08", () => {
    it("Nie wprowadzenie danych w informacjach o firmie", () => {
        cy.openAndAcceptCookies();
        cy.get('[alt="toggle"]').click();
        cy.get('[role="listbox"]').contains('Polska').click();
        cy.get('#taxId').type('7543267113');
        cy.get('[data-testid="company-data-button"]').click();
        cy.get('#name').click();
        cy.get('#addressLine').click();
        cy.get('#zipCode').click();
        cy.get('#city').click().tab();
    })
})