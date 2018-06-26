
import { fromJS } from 'immutable';
import navBarReducer from '../reducer';
import {
  selectTab,
} from '../actions';

describe('navBarReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      selectedTab: '/',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(navBarReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handles the selectTab action correctly', () => {
    const expectedResult = state
      .set('selectedTab', '/posts');
    expect(navBarReducer(state, selectTab())).toEqual(expectedResult);
  });
});
