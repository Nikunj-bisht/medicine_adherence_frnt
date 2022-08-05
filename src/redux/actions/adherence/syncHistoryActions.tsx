import Types from '../allTypes';
import Logger from '../../../logger';


export function putSyncHistory(med_id: string) {
  return {
    type: Types.POST_SYNC_HISTORY,
    payload: med_id,
  };
}
export function putSyncHistorysuccess(data) {
 Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_SYNC_HISTORY,
    payload: data,
  };
}
export function putSyncHistoryerror(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_SYNC_HISTORY,
    payload: error,
  };
}
export const syncHistoryActions = {
  putSyncHistory,
  putSyncHistorysuccess,
  putSyncHistoryerror
}