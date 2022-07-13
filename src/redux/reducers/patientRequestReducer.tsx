import { State } from "react-native-gesture-handler";
import Types from "../actions/allTypes";

let initialState={
    data: {},
    load:true,
    error: '',
};

const patientRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PATIENT_REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS_GET_PATIENT_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_GET_PATIENT_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

  export default patientRequestReducer;