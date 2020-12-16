/// <reference types="cypress" />

// get all regions
describe('get all regions', () => {
  it('should return 200 response', () => {
    cy.request('api/regions')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
