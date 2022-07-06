import Types from './AllTypes';

export function fetchImages(medId: Number) {
  return {
    type: Types.GET_IMAGES,
    payload: medId,
  };
}

export function fetchImagesSuccess(data) {
    return {
        type: Types.SUCCES_GET_IMAGES,
        payload: data,
    }
}

export function fetchImagesFailure(error) {
    return {
        type: Types.FAILED_GET_IMAGES,
        payload: error,
    }
}