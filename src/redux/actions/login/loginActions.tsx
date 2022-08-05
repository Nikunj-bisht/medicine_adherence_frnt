import Types from '../allTypes';
import Logger from '../../../logger'

interface Iparams {
  userinfo: any;
  token: string;
}
function sendLoginRequest(params) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: params,
  };
}
function LoginSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_LOGIN,
    payload: data,
  };
}
function LoginFailure(error) {
  Logger.loggerInfo('error');
  return {
    type: Types.FAILED_LOGIN,
    payload: error,
  };
}
export const loginActions = {
  sendLoginRequest,
  LoginSuccess,
  LoginFailure,
};