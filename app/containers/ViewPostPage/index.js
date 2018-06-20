/**
 *
 * ViewPostPage
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
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Components
import LoadingIndicator from 'components/LoadingIndicator';
import H1 from 'components/H1';
import Section from './Section';
import CenteredSection from './CenteredSection';
// Actions
import { showPost } from './actions';
// Selectors
import { selectPost, selectLoading } from './selectors';

export class ViewPostPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onShowPost(id);
  }

  render() {
    const { post, loading } = this.props;

    if (loading) {
      return <LoadingIndicator />;
    }

    return (
      <div>
        <Helmet>
          <title>ViewPostPage</title>
          <meta name="description" content="Description of ViewPostPage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H1>
              {post.title}
            </H1>
          </CenteredSection>
          <Section>
            Categories: {post.categories}
            <p>
              {post.content}
            </p>
          </Section>
        </div>
      </div>
    );
  }
}

ViewPostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  post: selectPost(),
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onShowPost: (id) => {
      dispatch(showPost(id));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'viewPostPage', reducer });
const withSaga = injectSaga({ key: 'viewPostPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewPostPage);
