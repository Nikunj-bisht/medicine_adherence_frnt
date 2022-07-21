import Types from "../actions/allTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const myPatientsReducer = (state = initialState, action) => {   //NO SONAR
  switch (action.type) {
    case Types.GET_PATIENTS:
      return {data: null, loading: true, error: null};
    case Types.SUCCESS_GET_PATIENTS:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_TO_GET_PATIENTS:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default myPatientsReducer;