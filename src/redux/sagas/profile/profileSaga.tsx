import {takeLatest, call, put} from 'redux-saga/effects';
import { patient } from '../../apis/patientProfile';
import { patientProfileActions } from '../../actions/patientProfileActions';
export function* patientProfileSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.patientProfile, payload);
    yield put(patientProfileActions.fetchpatientProfilesuccess(response?.data));
  } catch (err) {
    yield put( patientProfileActions.fetchpatientProfilerror(err));
  }
}
export function* patientProfilewatcherSaga() {
  yield takeLatest( patientProfileActions.fetchpatientProfile, patientProfileSaga);
}

