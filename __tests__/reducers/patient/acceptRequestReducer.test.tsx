import acceptRequestReducer from '../../../src/redux/reducers/patient/acceptRequestReducer';
import Types from '../../../src/redux/actions/adherence/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test AcceptRequestReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false ,
        error:null ,
      };
      const result = acceptRequestReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for authentication load', () => {
      expect(
        acceptRequestReducer(initialState, {
              type: Types.PUT_ACCEPT_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        acceptRequestReducer(initialState, {
              type: Types.SUCCESS_ACCEPT_REQUEST,
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
        acceptRequestReducer(initialState, {
              type: Types.FAILED_ACCEPT_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});

