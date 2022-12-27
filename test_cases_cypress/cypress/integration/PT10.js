/// <reference types="cypress" />

describe("PT10", () => {
    it("Wprowadzenie błędnego adresu e-mail", () => {
        cy.openAndAcceptCookies();
        cy.get('#email').type('abc').tab();
        cy.get('#email').clear().type('123').tab();
    })
})