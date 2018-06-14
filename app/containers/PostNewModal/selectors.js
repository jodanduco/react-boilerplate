import { createSelector } from 'reselect';

/**
 * Direct selector to the postNewModal state domain
 */
const selectPostNewModalDomain = (state) => state.get('postNewModal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostNewModal
 */

const makeSelectPostNewModal = () => createSelector(
  selectPostNewModalDomain,
  (substate) => substate.toJS()
);

export default makeSelectPostNewModal;
export {
  selectPostNewModalDomain,
};
