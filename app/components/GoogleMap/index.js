/**
*
* GoogleMap
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class GoogleMap extends React.Component {
  
  componentDidMount() {
    const htmlElementRef = this.refs.map; // -> To work to third party libraries that not works with react
    new google.maps.Map(htmlElementRef, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }
  render() {
    return (
      <div
        style={{width: '200px', height: '200px'}}
        ref="map" />
    );
  }
}

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default GoogleMap;
