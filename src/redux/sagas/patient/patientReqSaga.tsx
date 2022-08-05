import {takeLatest, call, put} from 'redux-saga/effects';
import patient from '../../apis/patient';
import { patientReqActions } from '../../actions/patient/patientReqActions';
export function* patientReqSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.patientReq, payload);
    yield put(patientReqActions. getPatientRequestSuccess(response?.data));
  } catch (err) {
    yield put(patientReqActions. getPatientRequestFailure(err));
  }
}
export function* patientreqwatcherSaga() {
  yield takeLatest(patientReqActions. getPatientRequest, patientReqSaga);
}