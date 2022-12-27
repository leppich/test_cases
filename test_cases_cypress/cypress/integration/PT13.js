/// <reference types="cypress" />

describe("PT13", () => {
    it("Wprowadzenie niepoprawnego hasła", () => {
        cy.openAndAcceptCookies();
        cy.get('#password').type('aa').tab();
        cy.get('#password').clear().type('aa').tab();
        cy.get('#password').clear().type('abcdefgh').tab();
        cy.get('#password').clear().type('ABCDEFGH').tab();
        cy.get('#password').clear().type('12345678').tab();
        cy.get('#password').clear().type('Abcdefgh').tab();
    })
})