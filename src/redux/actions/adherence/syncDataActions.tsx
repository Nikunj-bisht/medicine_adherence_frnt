import Types from '../allTypes';
import Logger from '../../../logger';


export function postSyncData(user_id: string) {
  return {
    type: Types.POST_SYNC_DATA,
    payload: user_id,
  };
}
export function postSyncDatasuccess(data) {
 Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_SYNC_DATA,
    payload: data,
  };
}
export function postSyncDataerror(error) {
  Logger.loggerError('error');
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