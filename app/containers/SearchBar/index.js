/**
 *
 * SearchBar
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
import makeSelectSearchBar from './selectors';
import { changeTerm } from './actions';
import { loadWeatherList } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

export class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <input
          type="text"
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          onChange={this.props.onChangeTerm}
        />
        <button type="submit" className="btn btn-secondary">Search</button>
        <button type="reset" className="btn btn-secondary">Clear</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  onChangeTerm: PropTypes.func,
  term: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  searchbar: makeSelectSearchBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeTerm: (evt) => {
      const newTerm = evt.target.value;
      dispatch(changeTerm(newTerm));
    },
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadWeatherList());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchBar', reducer });
const withSaga = injectSaga({ key: 'searchBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchBar);
