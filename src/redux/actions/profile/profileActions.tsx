import Logger from "../../../logger";
import Types from "../allTypes";


function saveProfile(user_id: string) {
  return {
    type: Types.SAVE_PROFILE,
    payload: user_id,
  };
}
function saveProfileSuccess(data) {
  Logger.loggerInfo('success');
  return {
    type: Types.SUCCESS_PROFILE,
    payload: data,
  };
}
function saveProfileFailed(error) {
  Logger.loggerError('error');
  return {
    type: Types.FAILED_PROFILE,
    payload: error,
  };
}

export const ProfileActions = {
  saveProfile,
  saveProfileSuccess,
  saveProfileFailed,
}