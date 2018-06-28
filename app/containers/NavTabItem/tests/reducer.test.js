
import { fromJS } from 'immutable';
import navTabItemReducer from '../reducer';

describe('navTabItemReducer', () => {
  it('returns the initial state', () => {
    expect(navTabItemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
