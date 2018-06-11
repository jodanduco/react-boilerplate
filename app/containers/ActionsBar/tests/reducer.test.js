
import { fromJS } from 'immutable';
import actionsBarReducer from '../reducer';

describe('actionsBarReducer', () => {
  it('returns the initial state', () => {
    expect(actionsBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
