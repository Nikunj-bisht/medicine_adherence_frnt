import Types from '../actions/allTypes';

let initialState = {
  load: true,
  userDetailsList: [],
};

const saveUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Types.SUCCESS_SAVE_USER:
      return {
        load: false,
        userCaretakerList: payload.userDetailsList,
      };
    case Types.FAILED_SAVE_USER:
      return {
        ...state,
        userDetailsList: [],
      };
    default:
      return state;
  }
};

export default saveUserReducer;