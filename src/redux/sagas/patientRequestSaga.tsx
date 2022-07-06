import { call, put, takeEvery } from "redux-saga/effects";
import Types from "../actions/allTypes";
import {
    fetchpatientsuccess,
    fetchpatienterror,
} from '../actions/patientRequestActions';
import fetchpatientrequests from "../apis/patientRequest";

function* getpatientrequest({payload}) {
    try {
        const data = yield call(fetchpatientrequests, payload);
        console.log(data, 'called');
    yield put(fetchpatientsuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchpatienterror(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_PATIENT_REQUEST, getpatientrequest);
}
