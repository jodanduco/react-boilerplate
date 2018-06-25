import React from 'react';

import A from './A';
import Img from './Img';
import Banner from './banner.jpg';
import NavBar from 'containers/NavBar';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar />
      </div>
    );
  }
}

export default Header;
