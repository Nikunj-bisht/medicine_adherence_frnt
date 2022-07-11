import Types from "./allTypes";

export function getPatientRequest(user_id: string) {
    return {
        type: Types.GET_PATIENT_REQUEST,
        payload: user_id,
    };
}
export function getPatientRequestSuccess(data) {
    console.log(data, 'success');
    return {
    type: Types.SUCCESS_GET_PATIENT_REQUEST,
    payload:data,
};
}
export function getPatientRequestFailure(error) {
    console.log(error, 'ac');
    return{
        type: Types.FAILED_GET_PATIENT_REQUEST,
        payload:error,
    }
}