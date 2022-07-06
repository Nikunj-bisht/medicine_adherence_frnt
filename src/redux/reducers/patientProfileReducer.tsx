import Types from "../actions/allTypes";

let initialState={
    load:true,
    userProfileList:[],
};

 function  ProfileReducer(state = initialState, {type, payload}) => {
    switch (type) {
      case Types.SUCCESS_GET_PROFILE:
        return {
          load: false,
          userProfileList: payload.userProfileList,
        };
      case Types.FAILED_GET_PROFILE:
        return {
          ...state,
          userProfileList: [],
        };
      default:
        return state;
    }
  };
  
export default patientProfileReducer;