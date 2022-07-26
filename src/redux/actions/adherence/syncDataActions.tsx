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

export function postSyncData(user_id: string) {
  return {
    type: Types.POST_SYNC_DATA,
    payload: user_id,
  };
}
export function postSyncDatasuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_DATA,
    payload: data,
  };
}
export function postSyncDataerror(error) {
  log.error(error, 'ac');
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