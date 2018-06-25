/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  home: {
    id: 'boilerplate.components.Header.home',
    defaultMessage: 'Home',
    route: '/',
  },
  features: {
    id: 'boilerplate.components.Header.features',
    defaultMessage: 'Features',
    route: '/features',
  },
  signin: {
    id: 'boilerplate.components.Header.signin',
    defaultMessage: 'Sign in',
    route: '/signin',
  },
  signout: {
    id: 'boilerplate.components.Header.signout',
    defaultMessage: 'Sign out',
    route: '/signout',
  },
  weather: {
    id: 'boilerplate.components.Header.weather',
    defaultMessage: 'Weather',
    route: '/weather',
  },
  posts: {
    id: 'boilerplate.components.Header.posts',
    defaultMessage: 'Posts',
    route: '/posts',
  },
});
