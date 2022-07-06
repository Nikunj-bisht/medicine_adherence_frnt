import Types from "../actions/allTypes";
import axios from "../apis/axiosDeclaration";

let initialState = {
    load: true,
    sendimagesList: [],
  };
  
  const sendImageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case Types.SUCCES_SEND_IMAGES:
        return {
          ...state,
          load: false,
          ImagesList: payload.ImagesList,
        };
      case Types.FAILED_SEND_IMAGES:
        return {
          ...state,
          sendImagesList: [],
          load:false,
        };
      default:
        return state;
    }
  };
  
  export default sendImageReducer;