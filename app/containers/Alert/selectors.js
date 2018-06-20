import { createSelector } from 'reselect';

/**
 * Direct selector to the alert state domain
 */
const selectAlertDomain = (state) => state.get('alert');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Alert
 */

const makeSelectAlertConfig = () => createSelector(
  selectAlertDomain,
  (substate) => substate.get('config')
);

const makeSelectAlertStatus = () => createSelector(
  selectAlertDomain,
  (substate) => substate.get('isOpened')
);

export {
  selectAlertDomain,
  makeSelectAlertConfig,
  makeSelectAlertStatus,
};
