import Types from '../actions/allTypes';

let initialState = {
  load: true,
  myPatientList: [],
};

const myPatientsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Types.SUCCESS_GET_PATIENTS :
      return {
        load: false,
        myPatientList: payload.myPatientListList,
      };
    case Types.FAILED_TO_GET_PATIENTS:
      return {
        ...state,
        myPatientList: [],
      };
    default:
      return state;
  }
};

export default myPatientsReducer;