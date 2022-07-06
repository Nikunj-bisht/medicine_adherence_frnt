import { State } from "react-native-gesture-handler";
import Types from "../actions/allTypes";

let initialState = {
    load: true,
    patientRequestList: [],
  };

  const patientRequestReducer = {state = initialState, {type, payload}} => {
      switch(type) {
          case Types.SUCCESS_GET_PATIENT_REQUEST:
              return {
                  load: false,
                  patientRequestList: payload.patientRequestList,
              };
              case Types.FAILED_GET_PATIENT_REQUEST:
                  return {
                      ...state,
                      patientRequestList: [],
                  };
                  default:
                      return State;
      }
  };

  export default patientRequestReducer;