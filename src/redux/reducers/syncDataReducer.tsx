import Types from '../actions/allTypes';

let initialState = {
  load: true,
  syncDataList: [],
};

const syncDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Types.SUCCESS_SYNC_DATA:
      return {
        load: false,
        syncDataList: payload.syncDataList,
      };
    case Types.FAILED_SYNC_DATA:
      return {
        ...state,
        syncDataList: [],
      };
    default:
      return state;
  }
};

export default syncDataReducer;
