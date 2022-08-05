import {logger} from 'react-native-logs';
import Logger from '../../../logger';
import Types from '../allTypes';
function sendEmail(email: any) {
  return {
    type: Types.SEND_EMAIL,
    payload: email,
  };
}
function sendEmailSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_SEND_EMAIL,
    payload: data,
  };
}
function sendEmailFailed(error) {
 Logger.loggerError('error');
  return {
    type: Types.FAILED_SEND_EMAIL,
    payload: error,
  };
}

export const emailCaretakerActions = {
  sendEmail,
  sendEmailSuccess,
  sendEmailFailed,
};