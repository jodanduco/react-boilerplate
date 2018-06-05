/**
 *
 * WeatherListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Chart from 'components/Chart'


export class WeatherListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    debugger
    const item = this.props.item;
    return (
      <div>
        <Chart data={item.temps} color="orange" units="ºC"/>
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
