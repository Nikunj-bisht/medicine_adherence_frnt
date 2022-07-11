import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  getImageSuccess,
  getImageFailure,
} from '../actions/getImagesActions';
import getImageRequest from '../apis/getImages';

function* getimages({payload}) {
  try {
    const data = yield call(getImageRequest, payload);
    console.log(data, 'called');
    yield put(getImageSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(getImageFailure(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_IMAGES, getimages);
}
