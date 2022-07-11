import Types from './allTypes';

export function getPdfRequest(medId: string) {
  return {
    type: Types.GET_SEND_PDF,
    payload: medId,
  };
}

export function getPdfSuccess(data) {
  return {
    type: Types.SUCCESS_SEND_PDF,
    payload: data,
  };
}
export function getPdfFailure(error) {
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