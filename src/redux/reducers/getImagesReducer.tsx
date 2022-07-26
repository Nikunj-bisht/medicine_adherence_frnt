import Types from "../actions/adherence/allTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const getImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_IMAGES:
      return {...state, loading: true};
    case Types.SUCCES_GET_IMAGES:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_GET_IMAGES:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default getImagesReducer;