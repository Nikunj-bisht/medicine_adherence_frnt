import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  fetchPatientsuccess,
  fetchPatienterror,
} from '../actions/myPatientsActions';
import { fetchPatients } from '../actions/myPatientsActions';

function* getpatient({payload}) {
  try {
    const data = yield call(fetchPatients, payload);
    console.log(data, 'called');
    yield put(fetchPatientsuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchPatienterror(err));
  }
}

export default function* myPatientsSaga() {
  yield takeEvery(Types.GET_PATIENTS, getpatient);
}