import Types from './allTypes';
import { logger, consoleTransport } from "react-native-logs";

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  }
};
const log = logger.createLogger(defaultConfig);

export function fetchAcceptRequest(c_id: string) {
  return {
    type: Types.PUT_ACCEPT_REQUEST,
    payload: c_id,
  };
}
export function fetchAcceptRequestSuccess(data) {
  log.info(data,'success');
  return {
    type: Types.SUCCESS_ACCEPT_REQUEST,
    payload: data,
  };
}
export function fetchAcceptRequestError(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_ACCEPT_REQUEST,
    payload: error,
  };
}
export const acceptRequestActions = {
  fetchAcceptRequest,
  fetchAcceptRequestSuccess,
 fetchAcceptRequestError
}
