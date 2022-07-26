import myPatientsReducer from './myPatientsReducer';
import Types from '../actions/adherence/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test myPatientReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = myPatientsReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  it('should check for authentication load', () => {
      expect(
        myPatientsReducer(initialState, {
              type: Types.GET_PATIENTS,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
    expect(
      myPatientsReducer(initialState, {
            type: Types.SUCCESS_GET_PATIENTS,
            payload: { status: 'success' },
        }),
    ).toEqual({
      data: null,
      loading: true,
      error: null,
    });
});
  it('should check for authentication error', () => {
      expect(
        myPatientsReducer(initialState, {
              type: Types.FAILED_TO_GET_PATIENTS,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});