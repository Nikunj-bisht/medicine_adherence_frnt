import Types from './allTypes';

export function getImageRequest(medId: number) {
  return {
    type: Types.GET_IMAGES,
    payload: medId,
  };
}

export function getImageSuccess(data) {
  return {
    type: Types.SUCCES_GET_IMAGES,
    payload: data,
  };
}
export function getImageFailure(data) {
  return {
    type: Types.FAILED_GET_IMAGES,
    payload: data,
  };
}
export const getImagesActions = {
  getImageRequest,
  getImageSuccess,
  getImageFailure,
}



