import Types from '../adherence/allTypes';
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

export function fetchCaretakers(user_id: string) {
  return {
    type: Types.GET_CARETAKERS,
    payload: user_id,
  };
}
export function fetchCaretakerssuccess(data) {
  log.info(data,'success');
  return {
    type: Types.Success_CareTAKER_REQUEST,
    payload: data,
  };
}
export function fetchCaretakerserror(error) {
  log.error(error, 'ac');
  return {
    type: Types.Failed_CareTAKER_REQUEST,
    payload: error,
  };
}
export const caretakerActions = {
  fetchCaretakers,
  fetchCaretakerssuccess,
  fetchCaretakerserror
}
