
import { fromJS } from 'immutable';
import postNewModalReducer from '../reducer';

describe('postNewModalReducer', () => {
  it('returns the initial state', () => {
    expect(postNewModalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
