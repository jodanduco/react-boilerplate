import { createSelector } from 'reselect';

/**
 * Direct selector to the confirmModal state domain
 */
const selectConfirmModalDomain = (state) => state.get('confirmModal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ConfirmModal
 */

const makeSelectConfirmModal = () => createSelector(
  selectConfirmModalDomain,
  (confirmModalState) => confirmModalState.toJS()
);

const selectStatus = () => createSelector(
  selectConfirmModalDomain,
  (confirmModalState) => confirmModalState.get('opened'),
);

const selectMessage = () => createSelector(
  selectConfirmModalDomain,
  (confirmModalState) => confirmModalState.get('message'),
);

const selectCallbacks = () => createSelector(
  selectConfirmModalDomain,
  (confirmModalState) => confirmModalState.get('callbacks'),
);

export default makeSelectConfirmModal;
export {
  selectConfirmModalDomain,
  selectStatus,
  selectMessage,
  selectCallbacks,
};
