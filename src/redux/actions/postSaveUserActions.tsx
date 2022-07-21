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

export function postSaveUserDetails(fcm_token: string,pic_path:string) {
  return {
    type: Types.POST_SAVE_USER,
    payload: {fcm_token,pic_path},
  };
}
export function postSaveUserDetailssuccess(data:any) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_SAVE_USER,
    payload: data,
  };
}
export function postSaveUserDetailserror(error:any) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_SAVE_USER,
    payload: error,
  };
}
export const postSaveUserActions = {
  postSaveUserDetails,
  postSaveUserDetailssuccess,
  postSaveUserDetailserror
  
}