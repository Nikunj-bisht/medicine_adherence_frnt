import {spawn} from 'redux-saga/effects';
import caretakerSaga from './caretakerSaga';
import loginSaga from './login/loginSaga';
import acceptRequestSaga from './acceptRequestSaga';
import getImagesSaga from './getImagesSaga';
import getPdfSaga from './adherence/getPdfSaga';
import myPatientsSaga from './myPatientsSaga';
import patientRequestSaga from './patientRequestSaga';
import profileSaga from './profileSaga';
import deleteRequestSaga from './deleteRequestSaga';
import syncDataSaga from './syncDataSaga';
import syncHistorySaga from './syncHistorySaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
  //yield spawn();
  yield spawn(loginSaga);
  yield spawn(acceptRequestSaga);
  yield spawn(getImagesSaga);
  yield spawn(getPdfSaga);
  yield spawn(myPatientsSaga);
  yield spawn(patientRequestSaga);
  yield spawn(profileSaga);
  yield spawn(deleteRequestSaga);
  yield spawn(syncDataSaga);
  yield spawn(syncHistorySaga);
}

export default rootsaga;
