import axios from "../apis/axiosDeclaration";

let initialState = {
    load: true,
    imagesList: [],
  };
  
  const CareTakerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case Types.SUCCES_GET_IMAGES:
        return {
          load: false,
          ImagesList: payload.ImagesList,
        };
      case Types.FAILED_GET_IMAGES:
        return {
          ...state,
          userCaretakerList: [],
        };
      default:
        return state;
    }
  };
  
  export default getImageReducer;