/// <reference types="cypress" />

describe("PT09", () => {
    it("Wprowadzenie białych znaków w informacjach o firmie", () => {
        cy.openAndAcceptCookies();
        cy.get('[alt="toggle"]').click();
        cy.get('[role="listbox"]').contains('Polska').click();
        cy.get('#taxId').type('7543267113');
        cy.get('[data-testid="company-data-button"]').click();
        cy.get('#name').type('{backspace}');
        cy.get('#addressLine').type('{backspace}');
        cy.get('#zipCode').type('{backspace}');
        cy.get('#city').type('{backspace}').tab();
    })
})