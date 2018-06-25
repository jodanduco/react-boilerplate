/**
 *
 * NavBar
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
import makeSelectLocation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import NavBarContainer from './NavBarContainer';
import ItemLink from './ItemLink';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  isSelected(route) {
    const curretnPathname = this.props.location.get('pathname');
    return curretnPathname === route ? 'current' : '';
  }
  render() {
    return (
      <NavBarContainer>
        <ItemLink
          to={messages.signin.route}
          role="tab"
          aria-selected="false"
          className={this.isSelected(messages.signin.route)}
        >
          <FormattedMessage {...messages.signin} />
        </ItemLink>
        <ItemLink
          to={messages.signout.route}
          role="tab"
          aria-selected="false"
          className={this.isSelected(messages.signout.route)}
        >
          <FormattedMessage {...messages.signout} />
        </ItemLink>
        <ItemLink
          to={messages.home.route}
          role="tab"
          aria-selected="true"
          className={this.isSelected(messages.home.route)}
        >
          <FormattedMessage {...messages.home} />
        </ItemLink>
        <ItemLink
          to={messages.features.route} 
          role="tab" 
          aria-selected="false"
          className={this.isSelected(messages.features.route)}
        >
          <FormattedMessage {...messages.features} />
        </ItemLink>
        <ItemLink
          to={messages.weather.route}
          role="tab"
          aria-selected="false"
          className={this.isSelected(messages.weather.route)}
        >
          <FormattedMessage {...messages.weather} />
        </ItemLink>
        <ItemLink
          to={messages.posts.route}
          role="tab"
          aria-selected="false"
          className={this.isSelected(messages.posts.route)}
        >
          <FormattedMessage {...messages.posts} />
        </ItemLink>
      </NavBarContainer>
    );
  }
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navBar', reducer });
const withSaga = injectSaga({ key: 'navBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavBar);
