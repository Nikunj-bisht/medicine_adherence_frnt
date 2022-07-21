import Types from "../actions/allTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const getPdfReducer = (state = initialState, action:any) => {   //NO SONAR
  switch (action.type) {
    case Types.GET_SEND_PDF:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_SEND_PDF:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_SEND_PDF:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default getPdfReducer;