import {takeEvery} from 'redux-saga/effects';
import Types from '../actions/AllTypes';

function* getImagesagafunc(medId: Number) {}

export default function* getimagesagawatcher() {
  yield takeEvery(Types.GET_IMAGES, getImagesagafunc);
}
