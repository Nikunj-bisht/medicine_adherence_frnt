import { State } from "react-native-gesture-handler";
import Types from "../actions/allTypes";
import axios from "../apis/axiosDeclaration";

let initialState={
  data: {},
  load:true,
  error: '',
};

const sendImageReducer = (state = initialState, action) => {
switch (action.type) {
  case Types.SEND_IMAGES:
    return {...state, loading: true};
  case Types.SUCCES_SEND_IMAGES:
    return {data: action.data, loading: false, error: null};
  case Types.FAILED_SEND_IMAGES:
    return {data: null, loading: true, error: action.data};
  default:
    return initialState;
}
};
  
  export default sendImageReducer;