import Types from "./allTypes";
import { logger } from "react-native-logs";

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  }
};
const log = logger.createLogger(defaultConfig);

export function getMedicineHistoryRequest(med_id: string) {
    return {
        type: Types.GET_MEDICENE_HISTORY,
        payload: med_id,
    };
}
export function getMedicineHistoryRequestSuccess(data) {
    log.info(data, 'success');
    return {
    type: Types.SUCCESS_MEDICINE_HISTORY,
    payload:data,
};
}
export function getMedicineHistoryRequestFailure(error) {
    log.error(error, 'ac');
    return{
        type: Types.FAILED_MEDICINE_HISTORY,
        payload:error,
    }
}
export const getMediceneHistoryActions = {
    getMedicineHistoryRequest,
    getMedicineHistoryRequestFailure,
    getMedicineHistoryRequestSuccess
  }