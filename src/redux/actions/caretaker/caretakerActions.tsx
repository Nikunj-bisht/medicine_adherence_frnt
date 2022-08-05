import Types from '../allTypes';
import Logger from '../../../logger';

export function fetchCaretakers(user_id: string) {
  return {
    type: Types.GET_CARETAKERS,
    payload: user_id,
  };
}
export function fetchCaretakerssuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.Success_CareTAKER_REQUEST,
    payload: data,
  };
}
export function fetchCaretakerserror(error) {
Logger.loggerError('error');
  return {
    type: Types.Failed_CareTAKER_REQUEST,
    payload: error,
  };
}
export const caretakerActions = {
  fetchCaretakers,
  fetchCaretakerssuccess,
  fetchCaretakerserror
}
