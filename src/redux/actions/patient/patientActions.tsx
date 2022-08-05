import Types from "../allTypes";
import Logger from "../../../logger";

function fetchPatients(user_id: string) {
  return {
    type: Types.GET_PATIENT,
    payload: user_id,
  };
}
function fetchPatientSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCES_PATIENT,
    payload: data,
  };
}
function fetchPatientError(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_PATIENT,
    payload: error,
  };
}

export const PatientActions = {
  fetchPatients,
  fetchPatientSuccess,
  fetchPatientError,
}