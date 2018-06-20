/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';


import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Signin from 'containers/Signin/Loadable';
import Signout from 'containers/Signout/Loadable';
import Weather from 'containers/Weather/Loadable';
import PostsListPage from 'containers/PostsListPage/Loadable';
import ViewPostPage from 'containers/ViewPostPage/Loadable';
import Alert from 'containers/Alert';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/posts/:id" component={ViewPostPage} />
          <Route path="/posts" component={PostsListPage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/weather" component={Weather} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </AppWrapper>
    );
  }
}

function mapStateTopProps(state) {
  return state;
}

export default compose(mapStateTopProps)(App);

//export default App;
