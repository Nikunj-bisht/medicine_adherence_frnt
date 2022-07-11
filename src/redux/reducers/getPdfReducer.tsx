import { State } from "react-native-gesture-handler";
import Types from "../actions/allTypes";

let initialState ={
    load: true,
    pdfList : [],
};

const getPdFReducer = ( {type, payload},state = initialState) => {   //NO SONAR
    switch(type) {
        case Types.SUCCESS_SEND_PDF:
            return {
                load:false,
                pdfList: payload.pdfList,
            };
            case Types.FAILED_SEND_PDF:
            return {
                ...state,
                pdfList: [],
            }
            default:
                return State;
    }
};

export default getPdFReducer;