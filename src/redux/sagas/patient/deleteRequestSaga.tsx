import {takeLatest, call, put} from 'redux-saga/effects';
import { deletePatientActions } from '../../actions/patient/deletePatientRequestActions';
import { deleteRequest } from '../../apis/deleteRequest';
export function* reqDeleteSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(deleteRequest.reqDelete, payload);
    yield put(deletePatientActions.deletePatientRequestSuccess(response?.data));
  } catch (err) {
    yield put(deletePatientActions.deletePatientRequestFailure(err));
  }
}
export function* reqDeletewatcherSaga() {
  yield takeLatest(deletePatientActions.deletePatientRequest, reqDeleteSaga);
}
