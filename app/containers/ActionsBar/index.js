/**
 *
 * ActionsBar
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
import makeSelectActionsBar from './selectors';
import reducer from './reducer';
import saga from './saga';

// Actions
import { deleteWeatherList } from '../Weather/actions';

export class ActionsBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="wrapper">
        <button onClick={this.props.onClearAll}>Clear All</button>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  onClearAll: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  actionsbar: makeSelectActionsBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClearAll: (evt) => {
      dispatch(deleteWeatherList());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'actionsBar', reducer });
const withSaga = injectSaga({ key: 'actionsBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ActionsBar);
