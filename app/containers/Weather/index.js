/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Section from './Section';
import H2 from 'components/H2';
import WeatherList from 'components/WeatherList';
import reducer from './reducer';
import saga from './saga';
import CenteredSection from './CenteredSection';
import messages from './messages';
import { makeSelectWeatherList } from './selectors';

// Components
import SearchBar from 'containers/SearchBar';

export class Weather extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, error, weatherData } = this.props;
    const weatherListProps = { loading, error, weatherData };
    return <article>
        <Helmet>
          <title>Weather</title>
          <meta name="description" content="Description of Weather" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
          </CenteredSection>
          <Section>
            <SearchBar />
            <WeatherList {...weatherListProps} />
          </Section>
        </div>
      </article>;
  }
}

Weather.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  weatherData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  weatherData: makeSelectWeatherList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
