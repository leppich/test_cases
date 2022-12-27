/// <reference types="cypress" />

describe("PT11", () => {
    it("Wprowadzenie istniejącego loginu", () => {
        cy.openAndAcceptCookies();
        cy.get('#login').type('user').tab();
    })
})