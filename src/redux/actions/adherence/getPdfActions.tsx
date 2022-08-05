import Types from '../allTypes';
import Logger from '../../../logger';

export function getPdfRequest(medId: string) {
  return {
    type: Types.GET_SEND_PDF,
    payload: medId,
  };
}

export function getPdfSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_SEND_PDF,
    payload: data,
  };
}
export function getPdfFailure(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_SEND_PDF,
    payload: error,
  };
}
export const getPdfActions = {
  getPdfRequest,
  getPdfSuccess,
  getPdfFailure
}