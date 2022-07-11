import Types from '../actions/allTypes';

let initialState = {
  load: true,
  acceptRequestList: [],
};

const acceptRequestReducer = (state = initialState, {type, payload}) => { //NO SONAR
  switch (type) {
    case Types.SUCCESS_ACCEPT_REQUEST:
      return {
        load: false,
        userCaretakerList: payload.userCaretakerList,
      };
    case Types.FAILED_ACCEPT_REQUEST:
      return {
        ...state,
        acceptRequestList: [],
      };
    default:
      return state;
  }
};

export default acceptRequestReducer;