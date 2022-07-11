import Types from '../actions/allTypes';

let initialState = {
  load: true,
  userDetails: [],
};

const deleteRequestReducer = (state = initialState, {type, payload}) => {  //NO SONAR 
  switch (type) {
    case Types.SUCCESS_GET_DELETE_PATIENT_REQUEST:
      return {
        load: false,
        userDetails: payload.userDetails,
      };
    case Types.FAILED_GET_DELETE_PATIENT_REQUEST:
      return {
        ...state,
        userDetails: [],
      };
    default:
      return state;
  }
};

export default deleteRequestReducer;