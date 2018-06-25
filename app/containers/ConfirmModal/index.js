/**
 *
 * ConfirmModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Modal from 'react-modal';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// Selectors
import { selectStatus,
  selectMessage,
  selectCallbacks,
selectTitle } from './selectors';
import reducer from './reducer';
import saga from './saga';
// Actions
import { hideModal } from './actions';

export class ConfirmModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpened}
          onRequestClose={this.props.onCloseModal}
          aria-labelledby="confirmModalLabel"
          className="modal-dialog"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                aria-labelledby="confirmModalLabel"
                className="modal-title"
              >
                {this.props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.onCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.onCloseModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props.onClickOk.bind(this, this.props.callbaks)}
              >
                Ok
              </button>
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
  onClickOk: PropTypes.any,
  isOpened: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  callbaks: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isOpened: selectStatus(),
  message: selectMessage(),
  title: selectTitle(),
  callbaks: selectCallbacks()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCloseModal: evt => {
      dispatch(hideModal());
    },
    onClickOk: actions => {
      dispatch(actions.ok);
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'confirmModal', reducer });
const withSaga = injectSaga({ key: 'confirmModal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ConfirmModal);
