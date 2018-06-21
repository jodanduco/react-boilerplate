/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAlertConfig, makeSelectAlertStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
// Actions
import { hideAlert } from './actions';

export class Alert extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /**
   * Auto close alert after 5 seg.
   */
  autoCloseAlert() {
    setTimeout(() => {
      this.props.onCloseAlert();
    }, 5000);
  }

  render() {
    const alert = this.props.config;
    if (alert && !alert.type) return null;
    if (alert.type === 'success') {
      this.autoCloseAlert();
    }
    return (
      <div
        className={`alert
        alert-${alert.type}
        alert-dismissible
        fade
        ${this.props.isOpened ? 'show' : 'hide'}`}
        role="alert"
      >
        <strong>{alert.strongText}</strong> {alert.text}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={this.props.onCloseAlert}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Alert.propTypes = {
  isOpened: PropTypes.bool,
  onCloseAlert: PropTypes.func,
  config: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  config: makeSelectAlertConfig(),
  isOpened: makeSelectAlertStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCloseAlert: () => {
      dispatch(hideAlert());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'alert', reducer });
const withSaga = injectSaga({ key: 'alert', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Alert);
