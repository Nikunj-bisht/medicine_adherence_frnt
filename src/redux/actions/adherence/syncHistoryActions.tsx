import Types from './allTypes';
import { logger } from "react-native-logs";

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  }
};
const log = logger.createLogger(defaultConfig);
export function putSyncHistory(med_id: string) {
  return {
    type: Types.POST_SYNC_HISTORY,
    payload: med_id,
  };
}
export function putSyncHistorysuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_HISTORY,
    payload: data,
  };
}
export function putSyncHistoryerror(error) {
  log.error(error, 'ac');
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