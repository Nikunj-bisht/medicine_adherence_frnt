import Types from "../adherence/allTypes";
function fetchPatientDetails(user_id: string) {
  return {
    type: Types.GET_PATIENT_DETAILS,
    payload: user_id,
  };
}
function fetchPatientDetailsSuccess(data) {
  return {
    type: Types.SUCCES_PATIENT_DETAILS,
    payload: data,
  };
}
function fetchPatientDetailsError(error) {
  return {
    type: Types.FAILED_PATIENT_DETAILS,
    payload: error,
  };
}

export const PatientProfileActions = {
  fetchPatientDetails,
  fetchPatientDetailsSuccess,
  fetchPatientDetailsError,
}