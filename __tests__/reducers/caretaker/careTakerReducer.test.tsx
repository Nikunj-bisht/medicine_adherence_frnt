import careTakerReducer from '../../../src/redux/reducers/caretaker/careTakerReducer';
import Types from '../../../src/redux/actions/adherence/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test careTakerReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = careTakerReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  it('should check for authentication load', () => {
      expect(
        careTakerReducer(initialState, {
              type: Types.GET_CARETAKERS,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        careTakerReducer(initialState, {
              type: Types.Success_CareTAKER_REQUEST,
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
          careTakerReducer(initialState, {
              type: Types.Failed_CareTAKER_REQUEST,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});