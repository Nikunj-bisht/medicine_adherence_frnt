import deleteRequestReducer from './deleteRequestReducer';
import Types from '../actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test deleteRequestReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = deleteRequestReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  it('should check for authentication load', () => {
      expect(
        deleteRequestReducer(initialState, {
              type: Types.GET_DELETE_PATIENT_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        deleteRequestReducer(initialState, {
              type: Types.SUCCESS_GET_DELETE_PATIENT_REQUEST,
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
        deleteRequestReducer(initialState, {
              type: Types.FAILED_GET_DELETE_PATIENT_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});