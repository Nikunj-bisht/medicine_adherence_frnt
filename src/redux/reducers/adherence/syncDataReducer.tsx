import Types from '../../actions/adherence/allTypes';

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const syncDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.POST_SYNC_DATA:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SYNC_DATA:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SYNC_DATA:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default syncDataReducer;
