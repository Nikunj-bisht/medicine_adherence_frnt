import axios from "../apis/axiosDeclaration";

let initialState = {
    load: true,
    imagesList: [],
  };
  
  const getImagesReducer = (state = initialState, {type, payload}) => {  //NO SONAR
    switch (type) {
      case Types.SUCCESS_GET_IMAGES:
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
  
  export default getImagesReducer;