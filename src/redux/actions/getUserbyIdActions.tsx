import Types from './adherence/allTypes';

export function getUserbyIdRequest(medId: string) {
  return {
    type: Types.GET_USER_BY_ID_REQUEST,
    payload: medId,
  };
}

export function getUserbyidSuccess(data) {
  return {
    type: Types. SUCCESS_GET_USER_BY_ID_REQUEST,
    payload: data,
  };
}
export function getUserbyudFailure(error) {
  return {
    type: Types. FAILED_GET_USER_BY_ID_REQUEST,
    payload: error,
  };
}
export const getUserbyIdActions = {
    getUserbyIdRequest,
    getUserbyidSuccess,
    getUserbyudFailure
}