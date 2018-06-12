import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/signin">
            <FormattedMessage {...messages.signin} />
          </HeaderLink>
          <HeaderLink to="/signout">
            <FormattedMessage {...messages.signout} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/weather">
            <FormattedMessage {...messages.weather} />
          </HeaderLink>
          <HeaderLink to="/posts">
            <FormattedMessage {...messages.posts} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

/*const mapStateToProps = createStructuredSelector({
  //signin: makeSelectSignin(),
});

function mapDispatchToProps(state) {
  return { signin: state.signin };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
*/
/*export default compose(
  //withConnect,
)(Header);*/

export default Header;
