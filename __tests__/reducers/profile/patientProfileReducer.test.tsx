import patientProfileReducer from '../../../src/redux/reducers/profile/patientProfileReducer';
import Types from '../../../src/redux/actions/adherence/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test patientProfileReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = patientProfileReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  it('should check for authentication load', () => {
      expect(
        patientProfileReducer(initialState, {
              type: Types.GET_PROFILE,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        patientProfileReducer(initialState, {
              type: Types.SUCCESS_GET_PROFILE,
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
        patientProfileReducer(initialState, {
              type: Types.FAILED_GET_PROFILE,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});