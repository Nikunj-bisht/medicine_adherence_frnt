import Types from "../../actions/adherence/allTypes";

let initialState={
  data: null,
  loading: false,
  error: null,
};

const patientProfileReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Types.GET_PROFILE:
      return {...state, loading: true};
    case Types.SUCCESS_GET_PROFILE:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_GET_PROFILE:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};
  
export default patientProfileReducer;