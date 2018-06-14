/**
 *
 * ConfirmModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Modal from 'react-modal';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// Selectors
import { selectStatus, selectMessage, seletCallbacks } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { hideModal } from './actions';

export class ConfirmModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <div>
        <button>Open modal</button>
        <Modal
          isOpen={this.props.isOpened}
          onRequestClose={this.props.onCloseModal}
          className="modal-dialog"
          >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onCloseModal}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={this.props.callbaks.ok}>Ok</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ConfirmModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modalStatus: PropTypes.any,
  onCloseModal: PropTypes.any,
  isOpened: PropTypes.bool,
  message: PropTypes.string,
  callbaks: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isOpened: selectStatus(),
  message: selectMessage(),
  callbaks: seletCallbacks(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCloseModal: (evt) => {
      dispatch(hideModal());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'confirmModal', reducer });
const withSaga = injectSaga({ key: 'confirmModal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ConfirmModal);
