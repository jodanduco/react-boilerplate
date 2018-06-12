
import { fromJS } from 'immutable';
import postsListPageReducer from '../reducer';

describe('postsListPageReducer', () => {
  it('returns the initial state', () => {
    expect(postsListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
