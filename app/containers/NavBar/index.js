/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLocation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// Actions
import { selectTab } from './actions';

import NavBarContainer from './NavBarContainer';
import ItemLink from './ItemLink';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  isSelected(route) {
    const curretnPathname = this.props.location;
    return curretnPathname === route ? 'current' : '';
  }
  buildItemLink(item) {
    return (
      <ItemLink
        to={item.route}
        role="tab"
        aria-selected="false"
        onClick={this.props.onSelectTab.bind(this, item.route)}
        className={this.isSelected(item.route)}
      >
        <FormattedMessage {...item} />
      </ItemLink>
    );
  }

  render() {
    const items = Object.values(messages);
    const itemsLink = items.map((item) => this.buildItemLink(item));
    return (
      <NavBarContainer>
        {itemsLink}
      </NavBarContainer>
    );
  }
}

NavBar.propTypes = {
  location: PropTypes.string,
  onSelectTab: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSelectTab: (selectedTab) => {
      debugger;
      dispatch(selectTab(selectedTab));
    },
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
