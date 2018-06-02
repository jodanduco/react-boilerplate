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
import reducer from './reducer';
import saga from './saga';

export class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value=""
          onChange=""
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchbar: makeSelectSearchBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos()); dispatch action creator
      debugger
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
