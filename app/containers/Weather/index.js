/**
 *
 * Weather
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
import makeSelectWeather from './selectors';
import reducer from './reducer';
import saga from './saga';

// Components
import SearchBar from 'containers/SearchBar';

export class Weather extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Weather</title>
          <meta name="description" content="Description of Weather" />
        </Helmet>
          <h1>Weather</h1>
          <SearchBar />
      </div>
    );
  }
}

Weather.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  //weather: makeSelectWeather(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'weather', reducer });
const withSaga = injectSaga({ key: 'weather', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Weather);
