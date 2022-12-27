/// <reference types="cypress" />

describe("PT06", () => {
    it("Wprowadzenie w pola białych znaków", () => {
        cy.openAndAcceptCookies();
        cy.get('#email').type('{backspace}');
        cy.get('#login').type('{backspace}');
        cy.get('#password').type('{backspace}');
        cy.get('#phone').type('{backspace}').tab();
    })
})