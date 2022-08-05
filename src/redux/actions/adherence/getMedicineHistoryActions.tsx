import Types from "../allTypes";
import Logger from "../../../logger";

export function getMedicineHistoryRequest(med_id: string) {
    return {
        type: Types.GET_MEDICENE_HISTORY,
        payload: med_id,
    };
}
export function getMedicineHistoryRequestSuccess(data) {
    Logger.loggerInfo('success');
    return {
    type: Types.SUCCESS_MEDICINE_HISTORY,
    payload:data,
};
}
export function getMedicineHistoryRequestFailure(error) {
    Logger.loggerError('error');
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