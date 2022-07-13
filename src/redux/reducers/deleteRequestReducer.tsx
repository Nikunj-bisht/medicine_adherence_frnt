import { State } from "react-native-gesture-handler";
import Types from "../actions/allTypes";

const initialState = {
  data: {},
  loading: false,
  error: '',
};
const deleteRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_DELETE_PATIENT_REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS_GET_DELETE_PATIENT_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_GET_DELETE_PATIENT_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default deleteRequestReducer;