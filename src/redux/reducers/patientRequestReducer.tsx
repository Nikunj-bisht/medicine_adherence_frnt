import Types from "../actions/adherence/allTypes";

let initialState={
    data: {},
    load:false,
    error: '',
};

const patientRequestReducer = (state = initialState, action={data:"",type:""}) => {
  switch (action.type) {
    case Types.GET_PATIENT_REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS_GET_PATIENT_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types.FAILED_GET_PATIENT_REQUEST:
      return {data: null, loading: false, error: action.data};
    default:
      return initialState;
  }
};

  export default patientRequestReducer;