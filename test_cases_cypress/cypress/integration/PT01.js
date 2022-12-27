/// <reference types="cypress" />

describe("PT01", () => {
    it("Poprawna rejestracja konta", () => {
        cy.openAndAcceptCookies();
        cy.get('#email').type('email@mail.com');
        cy.get('#login').type('abcdd');
        cy.get('#password').type('abcdefgH1');
        cy.get('#phone').type('800 000 000');
        cy.get('[alt="toggle"]').click();
        cy.get('[role="listbox"]').contains('Polska').click();
        cy.get('#taxId').type('6641794988');
        cy.get('[data-testid="company-data-button"]').click();
        cy.wait(1000);
        cy.get('#agreementTerms').check({force: true});
        cy.get('#allegroMarketing').check({force: true});
        cy.get('#thirdPartyMarketing').check({force: true});

    })
})