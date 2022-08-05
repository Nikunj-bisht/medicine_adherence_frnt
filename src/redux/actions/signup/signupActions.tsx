import Types from '../allTypes';
import Logger from '../../../logger';

function sendSignupRequest(params: Iparams) {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: params,
  };
}
function SignupSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_SIGNUP,
    payload: data,
  };
}
function SignupFailure(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_SIGNUP,
    payload: error,
  };
}

export const signupActions = {
  sendSignupRequest,
  SignupSuccess,
  SignupFailure,
};