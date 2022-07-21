import getMediceneHistoryReducer from './getMediceneHistoryReducer';
import Types from '../actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test getMediceneHistoryReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = getMediceneHistoryReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  it('should check for authentication load', () => {
      expect(
        getMediceneHistoryReducer(initialState, {
              type: Types.GET_MEDICENE_HISTORY,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        getMediceneHistoryReducer(initialState, {
              type: Types.SUCCESS_MEDICINE_HISTORY,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for authentication error', () => {
      expect(
        getMediceneHistoryReducer(initialState, {
              type: Types.FAILED_MEDICINE_HISTORY,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});