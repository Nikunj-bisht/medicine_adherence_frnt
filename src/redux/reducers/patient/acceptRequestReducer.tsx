import Types from "../../actions/allTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const acceptRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PUT_ACCEPT_REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS_ACCEPT_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_ACCEPT_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default acceptRequestReducer;
