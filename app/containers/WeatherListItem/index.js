/**
 *
 * WeatherListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Chart from 'components/Chart';
import GoogleMap from 'components/GoogleMap';
import './weatherListItem.scss';

export class WeatherListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
      <div className="container">
        <div className="item">
          <GoogleMap lon={item.lon} lat={item.lat} />
        </div>
        <div className="item">
          <Chart data={item.temps} color="orange" units="ºC" />
        </div>
      </div>
    );
  }
}

WeatherListItem.propTypes = {
  item: PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(WeatherListItem);
