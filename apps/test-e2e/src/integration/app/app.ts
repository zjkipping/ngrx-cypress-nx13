import { WindowCounterActions } from '@ngrx-cypress-ng13/test-lib';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import { getCurrentCount, getIncrementButton } from '../../support/app.po';

Given('On the main page', () => {
  cy.visit('/');
});

When('increment button is clicked 4 times', () => {
  getIncrementButton().click();
  getIncrementButton().click();
  getIncrementButton().click();
  getIncrementButton().click();
});

Then('It should display 4', () => {
  getCurrentCount().should('contain.text', '4');
});

When('The delayed reset is triggered', () => {
  cy.window().then((win) => {
    (win as unknown as WindowCounterActions).mainPageActions.delayedReset();
  });
});

Then('It should display 0 after a delay', () => {
  // eslint-disable-next-line
  cy.wait(2000);
  getCurrentCount().should('contain.text', '0');
});
