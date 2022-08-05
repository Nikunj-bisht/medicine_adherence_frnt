import patientReqReducer from '../../../src/redux/reducers/patient/patientReqReducer'
import Types from '../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test patientReqReducers', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = patientReqReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for patientReq load', () => {
      expect(
        patientReqReducer(initialState, {
              type: Types.GET_PATIENT_REQUEST,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for patientReq success', () => {
      expect(
        patientReqReducer(initialState, {
              type: Types.SUCCESS_GET_PATIENT_REQUEST,
              payload: { status: 'success' },
          }),
      ).toEqual({
        data: undefined,
        loading: false,
        error: null,
      });
  });
  it('should check for patientReq error', () => {
      expect(
        patientReqReducer(initialState, {
              type: Types.FAILED_GET_PATIENT_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});