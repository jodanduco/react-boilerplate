
import { fromJS } from 'immutable';
import postListItemReducer from '../reducer';

describe('postListItemReducer', () => {
  it('returns the initial state', () => {
    expect(postListItemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
