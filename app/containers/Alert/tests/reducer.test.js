
import { fromJS } from 'immutable';
import alertReducer from '../reducer';

describe('alertReducer', () => {
  it('returns the initial state', () => {
    expect(alertReducer(undefined, {})).toEqual(fromJS({}));
  });
});
