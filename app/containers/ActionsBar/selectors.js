import { createSelector } from 'reselect';

/**
 * Direct selector to the actionsBar state domain
 */
const selectActionsBarDomain = (state) => state.get('actionsBar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ActionsBar
 */

const makeSelectActionsBar = () => createSelector(
  selectActionsBarDomain,
  (substate) => substate.toJS()
);

export default makeSelectActionsBar;
export {
  selectActionsBarDomain,
};
