import {takeLatest, call, put} from 'redux-saga/effects';
import adherences from '../../apis/adherence';
import { medImagesActions } from '../../actions/adherence/medImagesActions';
export function* medImagesSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherences.medimages, payload);
    yield put(medImagesActions.fetchMedImagesSuccess(response?.data));
  } catch (err) {
    yield put(medImagesActions.fetchMedImagesError(err));
  }
}
export function* medImageswatcherSaga() {
  yield takeLatest(medImagesActions.fetchMedImages, medImagesSaga);
}