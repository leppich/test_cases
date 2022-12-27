/// <reference types="cypress" />

describe("PT12", () => {
    it("Wprowadzenie niepoprawnego loginu", () => {
        cy.openAndAcceptCookies();
        cy.get('#login').type('$$$$').tab();
    })
})