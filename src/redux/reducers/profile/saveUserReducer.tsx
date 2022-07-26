import Types from '../actions/adherence/allTypes';

let initialState={
  data: null,
  load:true,
  error: null,
};

const saveUserReducer = (state = initialState, action) => {
switch (action.type) {
  case Types.POST_SAVE_USER:
    return {...state, loading: true};
  case Types.SUCCESS_SAVE_USER:
    return {data: action.data, loading: false, error: null};
  case Types.FAILED_SAVE_USER:
    return {data: null, loading: true, error: action.data};
  default:
    return initialState;
}
};

export default saveUserReducer;