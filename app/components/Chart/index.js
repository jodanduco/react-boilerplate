/**
*
* Chart
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
  if (!data) return;
  return _.round(_.sum(data) / data.length);
}


function Chart(props) {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}

Chart.propTypes = {
  data: PropTypes.any,
  color: PropTypes.string,
  units: PropTypes.string,
};

export default Chart;
