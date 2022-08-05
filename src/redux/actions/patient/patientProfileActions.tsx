import Types from "../allTypes";
import Logger from "../../../logger";
function fetchPatientDetails(user_id: string) {
  return {
    type: Types.GET_PATIENT_DETAILS,
    payload: user_id,
  };
}
function fetchPatientDetailsSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCES_PATIENT_DETAILS,
    payload: data,
  };
}
function fetchPatientDetailsError(error) {
  Logger.loggerError('error');
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