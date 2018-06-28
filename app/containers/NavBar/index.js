/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import NavBarContainer from './NavBarContainer';
import NavTabItem from 'containers/NavTabItem';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  buildItemLink(item) {
    return (
      <NavTabItem
        key={item.id}
        route={item.route}
        name={item.defaultMessage}
      />
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
  onSelectTab: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // location: makeSelectLocation(),
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
