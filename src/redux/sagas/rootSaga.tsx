import {spawn} from 'redux-saga/effects';
import { downloadPdfSaga, downloadPdfwatcherSaga } from './adherence/getPdfSaga';
import { getMedHistorySaga, getMedHistorywatcherSaga } from './adherence/mediceneHistorySaga';
import { syncHistorySaga,syncHistorywatcherSaga } from './adherence/syncHistorySaga';
import {syncMedSaga, syncMedwatcherSaga} from './adherence/syncDataSaga';
import {caretakerSaga, caretakerwatcherSaga} from './caretaker/caretakerSaga';
import {emailCaretakerSaga, emailCaretakerwatcherSaga} from './caretaker/emailCaretakerSaga';
import {reqCaretakerSaga, reqCaretakerwatcherSaga} from './caretaker/reqCaretakerSaga';
import {sendImageSaga, sendImagewatcherSaga} from './caretaker/sendImageSaga';
import { loginSaga, loginWatcherSaga } from './login/loginSaga';
import {notifySaga, notifywatcherSaga} from './patient/notifyPatientSaga';
import { patientProfileSaga, patientProfilewatcherSaga } from './patient/patientProfileSaga';
import {reqAcceptSaga, reqAcceptwatcherSaga} from './patient/acceptRequestSaga';
import {reqDeleteSaga, reqDeletewatcherSaga} from './patient/deleteRequestSaga';
import {patientReqSaga, patientreqwatcherSaga} from './patient/patientReqSaga';
import { patientSaga, patientwatcherSaga } from './patient/patientSaga';
import { profileSaga, profilewatcherSaga } from './profile/profileSaga';
import { signupSaga, signupwatcherSaga } from './signup/signupSaga';


function* rootsaga() {
  yield spawn(syncMedSaga, syncMedwatcherSaga)
  yield spawn(caretakerSaga, caretakerwatcherSaga);
  yield spawn(emailCaretakerSaga, emailCaretakerwatcherSaga);
  yield spawn(reqCaretakerSaga, reqCaretakerwatcherSaga);
  yield spawn(sendImageSaga, sendImagewatcherSaga);
  yield spawn(notifySaga, notifywatcherSaga);
  yield spawn(reqAcceptSaga, reqCaretakerwatcherSaga);
  yield spawn(reqDeleteSaga, reqCaretakerwatcherSaga);
  yield spawn(patientReqSaga, patientreqwatcherSaga);
  yield spawn(patientSaga, patientwatcherSaga);
  yield spawn(profileSaga, profilewatcherSaga);
  yield spawn(loginSaga, loginWatcherSaga);
  yield spawn(signupSaga, signupwatcherSaga);
  yield spawn(patientProfileSaga, patientProfilewatcherSaga);
  yield spawn(reqAcceptSaga, reqAcceptwatcherSaga);
  yield spawn(reqDeleteSaga, reqDeletewatcherSaga);
  yield spawn(downloadPdfSaga, downloadPdfwatcherSaga);
  yield spawn(getMedHistorySaga, getMedHistorywatcherSaga);
  yield spawn(syncHistorySaga, syncHistorywatcherSaga)
  
}

export default rootsaga;
