import { takeEvery } from 'redux-saga/effects';
import Types from '../actions/allTypes';
import { sendImageFailure,sendImageSuccess } from '../actions/sendImagesAction';

function* getImagesagafunc(medId: Number) {

}

export default function* getimagesagawatcher() {
  yield takeEvery(Types.GET_IMAGES, getImagesagafunc);
}
