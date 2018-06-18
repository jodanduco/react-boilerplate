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

export class Alert extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const alert = this.props.config;
    debugger
    return (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{alert.strongText}</strong> {alert.text}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Alert.propTypes = {
  dispatch: PropTypes.func.isRequired,
  opened: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  //config: makeSelectAlertConfig(),
  opened: makeSelectAlertStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
