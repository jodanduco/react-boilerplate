/**
 *
 * PostsListPage
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
import makeSelectPostsListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadPosts } from './actions';

export class PostsListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    debugger
    this.props.loadPosts();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>PostsListPage</title>
          <meta name="description" content="Description of PostsListPage" />
        </Helmet>
        <h2>Posts</h2>
      </div>
    );
  }
}

PostsListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadPosts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  postslistpage: makeSelectPostsListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadPosts,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'postsListPage', reducer });
const withSaga = injectSaga({ key: 'postsListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostsListPage);
