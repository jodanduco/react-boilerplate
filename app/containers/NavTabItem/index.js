/**
 *
 * NavTabItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import  { makeSelectLocation } from './selectors';
import reducer from './reducer';
import ItemLink from './ItemLink';
import { selectTab } from 'containers/NavBar/actions';

export class NavTabItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  isSelected() {
    const curretnPathname = this.props.location;
    return curretnPathname === this.props.route ? 'current' : '';
  }
  render() {
    return (
      <ItemLink
        id={this.props.route}
        to={this.props.route}
        role="tab"
        aria-selected="false"
        onClick={() => this.props.onSelectTab(this.props.route)}
        className={this.isSelected()}
      >
        {this.props.name}
      </ItemLink>
    );
  }
}

NavTabItem.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
  location: PropTypes.string,
  onSelectTab: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSelectTab: (selectedTab) => dispatch(selectTab(selectedTab)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navTabItem', reducer });

export default compose(
  withReducer,
  withConnect,
)(NavTabItem);
