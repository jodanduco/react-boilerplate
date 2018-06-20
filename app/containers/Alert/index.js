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
  render() {
    debugger
    const alert = this.props.config;
    if (!alert) return  null;
    return (
        <div
          className={`alert
          alert-${alert.type}
          alert-dismissible
          fade
          show`}
          role="alert">
          <strong>{alert.strongText}</strong> {alert.text}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={this.props.onCloseAlert}
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    );
  }
}

Alert.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
  onCloseAlert: PropTypes.func,
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
    }
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
