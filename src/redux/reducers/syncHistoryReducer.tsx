import Types from '../actions/allTypes';

let initialState = {
  load: true,
  userMediceneList: [],
};

const syncHistoryReducer = (state = initialState, {type, payload}) => {  //NO SONAR
  switch (type) {
    case Types.SUCCESS_SYNC_HISTORY:
      return {
        load: false,
        userMediceneList: payload.userMediceneList,
      };
    case Types.FAILED_SYNC_HISTORY:
      return {
        ...state,
        userMediceneList: [],
      };
    default:
      return state;
  }
};

export default syncHistoryReducer;