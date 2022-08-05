import syncDataReducer from '../../../src/redux/reducers/adherence/syncDataReducer';
import Types from '../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test syncDataReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = syncDataReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for signup load', () => {
      expect(
        syncDataReducer(initialState, {
              type: Types.POST_SYNC_DATA,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for signup success', () => {
      expect(
        syncDataReducer(initialState, {
              type: Types.SUCCESS_SYNC_DATA,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for signup error', () => {
      expect(
        syncDataReducer(initialState, {
              type: Types.FAILED_SYNC_DATA,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});

