import Types from "../actions/allTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const careTakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CARETAKERS:
      return {...state, loading: true};
    case Types.Success_CareTAKER_REQUEST:
      return {data: action.data, loading: false, error: null};
    case Types. Failed_CareTAKER_REQUEST:
      return {data: null, loading: true, error: action.data};
    default:
      return initialState;
  }
};

export default careTakerReducer;
