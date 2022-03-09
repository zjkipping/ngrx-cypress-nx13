export function getElementByTestId(
  testId: string,
  options?: Partial<
    Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
  >
) {
  return cy.get(`[data-e2e=${testId}]`, options);
}
