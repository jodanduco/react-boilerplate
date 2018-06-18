/**
 *
 * PostsListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import messages from './messages';

import Section from './Section';
import H2 from 'components/H2';

import PostsList from 'components/PostsList';
import PostNewModal from 'containers/PostNewModal';
import ConfirmModal from 'containers/ConfirmModal';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostsListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import CenteredSection from './CenteredSection';
// Actions
import { loadPosts } from './actions';
import { showModal } from 'containers/ConfirmModal/actions';
import { showCreatePostModal } from 'containers/PostNewModal/actions';


// Selectors
import {
    makeSelectLoading,
    makeSelectError,
} from 'containers/App/selectors';

export class PostsListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    const { loading, error, posts } = this.props;
    const postListProps = { loading, error, posts };
    return <article>
        <Helmet>
          <title>Posts</title>
          <meta name="description" content="Posts" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
          </CenteredSection>
          <Section>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.onCreatePostModal}
            >Create
            </button>
            <PostNewModal />
            <ConfirmModal />
            <PostsList {...postListProps} />
          </Section>
        </div>
      </article>;
  }
}

PostsListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadPosts: PropTypes.func,
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onCreatePostModal: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPostsListPage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadPosts: () => {
      dispatch(loadPosts());
    },
    onShowModal: () => {
      dispatch(showModal());
    },
    onCreatePostModal: () => {
      dispatch(showCreatePostModal());
    },
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
