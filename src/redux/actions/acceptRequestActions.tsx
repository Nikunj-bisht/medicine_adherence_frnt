import Types from './allTypes';

export function fetchAcceptRequest(c_id: string) {
  return {
    type: Types.PUT_ACCEPT_REQUEST,
    payload: c_id,
  };
}
export function fetchAcceptRequestSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_ACCEPT_REQUEST,
    payload: data,
  };
}
export function fetchAcceptRequestError(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_ACCEPT_REQUEST,
    payload: error,
  };
}
