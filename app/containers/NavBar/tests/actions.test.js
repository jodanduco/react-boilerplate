
import {
  selectTab,
} from '../actions';
import {
  SELECT_TAB,
} from '../constants';

describe('NavBar actions', () => {
  describe('selectTab', () => {
    it('should return the correct constant', () => {
      const expected = {
        type: SELECT_TAB,
      };
      expect(selectTab()).toEqual(expected);
    });
  });
});
