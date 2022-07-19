import Types from '../actions/allTypes';

let initialState = {
  load: true,
  userMediceneList: [],
};

const getMediceneHistoryReducer = (state = initialState, {type, payload}) => {    
  switch (type) {
    case Types.SUCCESS_MEDICINE_HISTORY:
      return {
        load: false,
        userMediceneList: payload.userMediceneList,
      };
    case Types.FAILED_MEDICINE_HISTORY:
      return {
        ...state,
        userMediceneList: [],
      };
    default:
      return state;
  }
};

export default getMediceneHistoryReducer;