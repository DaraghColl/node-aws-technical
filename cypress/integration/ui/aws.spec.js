/// <reference types="cypress" />

// get all regions
describe('aws info landing page', () => {
  it('should visit landing page and show heading & button', () => {
    cy.visit('/');

    cy.get('[data-cy=landing-heading]').contains('AWS Data');

    cy.get('[data-cy=get-regions-button]').contains('Get All Regions');
  });

  it('should show aws data on button click', () => {
    cy.get('[data-cy=get-regions-button]').click();

    cy.get('[data-cy=aws-data-grid]').children().should('have.length', 16);
  });
});
