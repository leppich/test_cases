/// <reference types="cypress" />

describe("PT14", () => {
    it("Wprowadzenie niepoprawnego numeru telefonu", () => {
        cy.openAndAcceptCookies();
        cy.get('#phone').type('1234').tab();
        cy.get('#phone').clear().type('abcd').tab();
    })
})