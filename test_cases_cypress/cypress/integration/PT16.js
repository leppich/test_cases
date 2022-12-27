/// <reference types="cypress" />

describe("PT16", () => {
    it("Wprowadzenie niepoprawnego numeru NIP", () => {
        cy.openAndAcceptCookies();
        cy.get('#taxId').type('1234').tab();
        cy.get('#taxId').clear().type('abcd').tab();
    })
})