
import { fromJS } from 'immutable';
import viewPostPageReducer from '../reducer';

describe('viewPostPageReducer', () => {
  it('returns the initial state', () => {
    expect(viewPostPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
