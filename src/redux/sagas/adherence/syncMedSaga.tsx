import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { medImagesActions } from '../../actions/adherence/medImagesActions';
export function* syncMedSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(medImagesActions.fetchMedImagesSuccess(response?.data));
  } catch (err) {
    yield put(medImagesActions.fetchMedImagesError(err));
  }
}
export function* syncMedwatcherSaga() {
  yield takeLatest(medImagesActions.fetchMedImages, syncMedSaga);
}