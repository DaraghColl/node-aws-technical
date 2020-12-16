/// <reference types="cypress" />

// get all regions
describe('get all regions', () => {
  it('should return 200 response', () => {
    cy.request('api/regions')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('should return 16 results', () => {
    cy.request('api/regions').should((response) => {
      expect(response.body.data).to.have.length(16);
    });
  });
});
