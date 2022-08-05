import Types from '../allTypes';
import Logger from '../../../logger';
export function sendImageRequest(medId: number) {
  return {
    type: Types.SEND_IMAGES,
    payload: medId,
  };
}

export function sendImageSuccess(number) {
Logger.loggerInfo('success');
    return{
        type: Types.SUCCES_SEND_IMAGES,
        payload: number,
    };
}
export function sendImageFailure(error) {
    Logger.loggerError('error');
    return {
      type: Types.FAILED_GET_IMAGES,
      payload: error,
    };
}
export const sendImagesAction = {
  sendImageRequest,
  sendImageSuccess,
  sendImageFailure
  
}
