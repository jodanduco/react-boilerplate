/**
 *
 * PostListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostListItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class PostListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>PostListItem</title>
          <meta name="description" content="Description of PostListItem" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PostListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  postlistitem: makeSelectPostListItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
