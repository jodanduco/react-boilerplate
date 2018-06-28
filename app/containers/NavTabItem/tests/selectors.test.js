import { fromJS } from 'immutable';
import { selectRouteDomain, makeSelectLocation } from '../selectors';

describe('selectRouteDomain', () => {
  it('should select the route state ', () => {
    const routeState = fromJS({
      location: {
        pathname: '/posts',
        search: '',
        hash: '',
        key: '00v8yb',
      },
    });
    const mockedtate = fromJS({
      route: routeState,
    });
    expect(selectRouteDomain(mockedtate)).toEqual(routeState);
  });
  describe('makeSelectLocation', () => {
    const selector = makeSelectLocation();
    it('should get route path', () => {
      const pathname = '/posts';
      const mockedState = fromJS({
        route: {
          location: {
            pathname: '/posts',
          },
        },
      });
      expect(selector(mockedState)).toEqual(pathname);
    });
  });
});
