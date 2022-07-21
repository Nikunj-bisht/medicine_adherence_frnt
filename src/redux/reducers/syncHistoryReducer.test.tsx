import syncHistoryReducer from './syncHistoryReducer';
import Types from '../actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test syncHistoryReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = syncHistoryReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for synchistory load', () => {
      expect(
        syncHistoryReducer(initialState, {
              type: Types.POST_SYNC_HISTORY,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for synchistory success', () => {
      expect(
        syncHistoryReducer(initialState, {
              type: Types.SUCCESS_SYNC_HISTORY,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for synchistory error', () => {
      expect(
        syncHistoryReducer(initialState, {
              type: Types.FAILED_SYNC_HISTORY,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});