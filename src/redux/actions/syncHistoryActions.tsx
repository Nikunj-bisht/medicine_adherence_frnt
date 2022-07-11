import Types from './allTypes';

export function putSyncHistory(med_id: string) {
  return {
    type: Types.POST_SYNC_HISTORY,
    payload: med_id,
  };
}
export function putSyncHistorysuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_HISTORY,
    payload: data,
  };
}
export function putSyncHistoryerror(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_SYNC_HISTORY,
    payload: error,
  };
}