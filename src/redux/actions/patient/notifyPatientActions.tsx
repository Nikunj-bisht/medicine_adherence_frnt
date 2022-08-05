import Types from "../allTypes";
import Logger from "../../../logger";

function notifyPatients(medname: any) {
  return {
    type: Types.NOTIFY_PATIENT,
    payload: medname,
  };
}
function notifyPatientsSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_NOTIFY_PATIENT,
    payload: data,
  };
}
function notifyPatientsError(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_NOTIFY_PATIENT,
    payload: error,
  };
}

export const notifyPatientActions = {
  notifyPatients,
  notifyPatientsSuccess,
  notifyPatientsError,
}