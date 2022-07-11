import Types from "./allTypes";

export function getMedicineHistoryRequest(med_id: string) {
    return {
        type: Types.GET_MEDICENE_HISTORY,
        payload: med_id,
    };
}
export function getMedicineHistoryRequestSuccess(data) {
    console.log(data, 'success');
    return {
    type: Types.SUCCESS_MEDICINE_HISTORY,
    payload:data,
};
}
export function getMedicineHistoryRequestFailure(error) {
    console.log(error, 'ac');
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