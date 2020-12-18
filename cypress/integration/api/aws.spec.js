/// <reference types="cypress" />

// get all regions
describe('get all regions', () => {
  it('should retur status 200', () => {
    cy.request('api/regions').should('have.property', 'status', 200);
  });

  it('should have application type json', () => {
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

// get all vpcs
describe('get all vpcs', () => {
  it('should retur status 200', () => {
    cy.request('api/vpcs').should('have.property', 'status', 200);
  });

  it('should have application type json', () => {
    cy.request('api/vpcs')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('should return 1 result', () => {
    cy.request('api/vpcs').should((response) => {
      expect(response.body.data).to.have.length(1);
    });
  });
});
