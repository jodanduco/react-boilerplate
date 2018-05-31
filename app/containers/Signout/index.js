/**
 *
 * Signout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignout from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Signout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Signout</title>
          <meta name="description" content="Description of Signout" />
        </Helmet>
        <h1>Signout</h1>
      </div>
    );
  }
}

Signout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signout: makeSelectSignout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signout', reducer });
const withSaga = injectSaga({ key: 'signout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Signout);
