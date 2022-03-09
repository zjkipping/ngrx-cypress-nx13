import { getElementByTestId } from '@ngrx-cypress-ng13/util-e2e-functions';

export const getIncrementButton = () => getElementByTestId('increment-button');
export const getDecrementButton = () => getElementByTestId('decrement-button');
export const getResetButton = () => getElementByTestId('reset-button');
export const getCurrentCount = () => getElementByTestId('current-count');
