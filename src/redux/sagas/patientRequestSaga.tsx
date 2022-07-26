import {takeLatest, call, put} from 'redux-saga/effects';
import { patient } from '../apis/patientRequest';
import { getPatientRequestActions } from '../actions/patient/getPatientRequestActions';
export function* patientReqSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(patient.patientReq, payload);
    yield put(getPatientRequestActions.getPatientRequestSuccess(response?.data));
  } catch (err) {
    yield put(getPatientRequestActions.getPatientRequestFailure(err));
  }
}
export function* patientreqwatcherSaga() {
  yield takeLatest(getPatientRequestActions.getPatientRequest, patientReqSaga);
}
