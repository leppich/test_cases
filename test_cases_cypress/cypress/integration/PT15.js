/// <reference types="cypress" />

describe("PT15", () => {
    it('Uzupełnienie pola "Kraj" za pomocą wpisywania początkowej frazy', () => {
        cy.openAndAcceptCookies();
        cy.get('#country-search').type("Pol");
        cy.get('[role="listbox"]').contains('Polska').click();
    })
})