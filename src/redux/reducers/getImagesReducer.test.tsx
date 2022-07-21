import getImagesReducer from './getImagesReducer';
import Types from '../actions/allTypes';
const initialState = {
  data: null,
  loading: false,
  error: null,
};
describe('test getImagesReducer', () => {
  it('should return the initial state', () => {
      const initialState1 = {
        data: null,
        loading: false,
        error: null,
      };
      const result = getImagesReducer(undefined, {});
      expect(result).toEqual(initialState1);
  });
  it('should check for authentication load', () => {
      expect(
        getImagesReducer(initialState, {
              type: Types.GET_IMAGES,
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: null,
      });
  });
  it('should check for authentication success', () => {
      expect(
        getImagesReducer(initialState, {
              type: Types.SUCCES_GET_IMAGES,
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
        getImagesReducer(initialState, {
              type: Types.FAILED_GET_IMAGES,
              payload: 'ERROR',
          }),
      ).toEqual({
        data: null,
        loading: true,
        error: undefined,
      });
  });
});