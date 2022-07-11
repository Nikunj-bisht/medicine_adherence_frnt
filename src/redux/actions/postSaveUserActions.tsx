import Types from './allTypes';

export function postSaveUserDetails(fcm_token: string,pic_path:string) {
  return {
    type: Types.POST_SAVE_USER,
    payload: {fcm_token,pic_path},
  };
}
export function postSaveUserDetailssuccess(data:any) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_SAVE_USER,
    payload: data,
  };
}
export function postSaveUserDetailserror(error:any) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_SAVE_USER,
    payload: error,
  };
}