import Types from "../../actions/allTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const getMediceneHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MEDICENE_HISTORY:
      return {...state, loading: true};
    case Types.SUCCESS_MEDICINE_HISTORY:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_MEDICINE_HISTORY:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default getMediceneHistoryReducer;