import Types from './allTypes';

export function sendImageRequest(medId: Number) {
  return {
    type: Types.SEND_IMAGES,
    payload: medId,
  };
}

export function sendImageSuccess(image) {

    return{
        type: Types.SUCCES_SEND_IMAGES,
        payload: image,
    };
}
export function sendImageFailure(error) {
    console.log(error, 'ac');
    return {
      type: Types.FAILED_GET_IMAGES,
      payload: error,
    };
}
