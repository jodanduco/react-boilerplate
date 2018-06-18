/**
 *
 * PostListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostListItem from './selectors';
import reducer from './reducer';
import saga from './saga';
// Components
import ListItem from 'components/ListItem';
import Wrapper from '../RepoListItem/Wrapper';
import PostLink from './PostLink';
// Actions
import { showModal } from 'containers/ConfirmModal/actions';
import { deletePost } from 'containers/PostsListPage/actions';

export class PostListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <Wrapper>
        <PostLink href=""
          target="_blank">
          {item.title}
        </PostLink>
        <button onClick={this.props.onDeletePost.bind(this, item)}>Delete</button>
        <button>Edit</button>
        <button>Copy</button>
      </Wrapper>
    );
    // Render the content into a list item
    return (
      <ListItem key={`post-list-item-${item.id}`} item={content} />
    );
  }
}

PostListItem.propTypes = {
  item: PropTypes.object,
  onDeletePost: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  postlistitem: makeSelectPostListItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onDeletePost: (postToDelete) => {
      const params = {
        message: `Confirm to delete "${postToDelete.title}" ?`,
        callbaks: {
          cancel: null,
          ok: deletePost(postToDelete.id),
        },
      };
      dispatch(showModal(params));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'postListItem', reducer });
const withSaga = injectSaga({ key: 'postListItem', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostListItem);
