import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  deletePatientRequestSuccess,
  deletePatientRequestFailure,
} from '../actions/deletePatientRequestActions';
import fetchDeleteRequest from '../apis/deleteRequest';

function* deleterequest({payload}) {
  try {
    const data = yield call(fetchDeleteRequest, payload);
    console.log(data, 'called');
    yield put(deletePatientRequestSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(deletePatientRequestFailure(err));
  }
}

export default function* deleteRequestSaga() {
  yield takeEvery(Types.GET_DELETE_PATIENT_REQUEST, deleterequest);
}
