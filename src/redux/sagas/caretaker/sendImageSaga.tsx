import {takeLatest, call, put} from 'redux-saga/effects';
import { careTaker } from '../../apis/careTaker';
import { sendImagesAction } from '../../actions/caretaker/sendImagesAction';
export function* sendImageSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(careTaker.sendImage, payload);
    yield put(sendImagesAction.sendImageSuccess(response?.data));
  } catch (err) {
    yield put(sendImagesAction.sendImageFailure(err));
  }
}
export function* sendImagewatcherSaga() {
  yield takeLatest(sendImagesAction.sendImageRequest, sendImageSaga);
}