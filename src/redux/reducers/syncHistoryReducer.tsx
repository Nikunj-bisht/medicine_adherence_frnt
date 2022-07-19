import Types from '../actions/allTypes';

let initialState={
  data: {},
  load:true,
  error: '',
};

const syncHistoryReducer = (state = initialState, action) => {
switch (action.type) {
  case Types.POST_SYNC_HISTORY:
    return {...state, loading: true};
  case Types.SUCCESS_SYNC_HISTORY:
    return {data: action.data, loading: false, error: null};
  case Types.FAILED_SYNC_HISTORY:
    return {data: null, loading: true, error: action.data};
  default:
    return initialState;
}
};

export default syncHistoryReducer;