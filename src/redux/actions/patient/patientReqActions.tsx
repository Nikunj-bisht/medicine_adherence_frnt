import Logger from "../../../logger";
import Types from "../allTypes";

function getPatientRequest(user_id: string) {
  return {
    type: Types.GET_PATIENT_REQUEST,
    payload: user_id,
  };
}
function getPatientRequestSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_GET_PATIENT_REQUEST,
    payload: data,
  };
}
function getPatientRequestFailure(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_GET_PATIENT_REQUEST,
    payload: error,
  };
}

export const patientReqActions = {
  getPatientRequest,
  getPatientRequestSuccess,
  getPatientRequestFailure,
}
