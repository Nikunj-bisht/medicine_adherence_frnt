import Types from "../adherence/allTypes";

export function deletePatientRequest(user_id: string) {
    return {
        type: Types.GET_DELETE_PATIENT_REQUEST,
        payload: user_id,
    };
}
export function deletePatientRequestSuccess(data) {
    console.log(data, 'success');
    return {
    type: Types.SUCCESS_GET_DELETE_PATIENT_REQUEST,
    payload:data,
};
}
export function deletePatientRequestFailure(error) {
    console.log(error, 'ac');
    return{
        type: Types.FAILED_GET_DELETE_PATIENT_REQUEST,
        payload:error,
    }
}
export const deletePatientActions = {
    deletePatientRequest,
    deletePatientRequestSuccess,
    deletePatientRequestFailure,
  }