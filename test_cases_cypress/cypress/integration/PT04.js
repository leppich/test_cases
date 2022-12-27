/// <reference types="cypress" />

describe("PT04", () => {
    it("Brak wybranego kraju oraz numeru NIP", () => {
        cy.openAndAcceptCookies();
        cy.get('[data-testid="company-data-button"]').click();
    })
})