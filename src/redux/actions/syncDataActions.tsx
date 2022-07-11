import Types from './allTypes';

export function postSyncData(user_id: string) {
  return {
    type: Types.POST_SYNC_DATA,
    payload: user_id,
  };
}
export function postSyncDatasuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_DATA,
    payload: data,
  };
}
export function postSyncDataerror(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_SYNC_DATA,
    payload: error,
  };
}
export const syncDataActions = {
  postSyncData,
  postSyncDatasuccess,
  postSyncDataerror
}