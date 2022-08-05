import getPdfReducer from '../../../src/redux/reducers/adherence/getPdfReducer';
import Types from '../../../src/redux/actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test getPdFReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = getPdfReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  it('should check for authentication load', () => {
      expect(
        getPdfReducer(initialState, {
              type: Types.GET_SEND_PDF,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        getPdfReducer(initialState, {
              type: Types.SUCCESS_SEND_PDF,
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
        getPdfReducer(initialState, {
              type: Types.FAILED_SEND_PDF,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});