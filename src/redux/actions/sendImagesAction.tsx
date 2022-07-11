import Types from './allTypes';
export function sendImageRequest(medId: number) {
  return {
    type: Types.SEND_IMAGES,
    payload: medId,
  };
}

export function sendImageSuccess(number) {

    return{
        type: Types.SUCCES_SEND_IMAGES,
        payload: number,
    };
}
export function sendImageFailure(error) {
    console.log(error, 'ac');
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
