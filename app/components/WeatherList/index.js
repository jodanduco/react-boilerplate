/**
*
* WeatherList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import WeatherListItem from 'containers/WeatherListItem';


function WeatherList({ loading, error, weatherData }) {
  debugger
  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  if (error !== false) {
    const ErrorComponent = () => <ListItem item={'Something went wrong, please try again!'} />;
    return <List component={ErrorComponent} />;
  }
  if (weatherData !== false) {
    return <List items={weatherData} component={WeatherListItem} />;
  }


  return <div />;
}

WeatherList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  weatherData: PropTypes.any,
};

export default WeatherList;
