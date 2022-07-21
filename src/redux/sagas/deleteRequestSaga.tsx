import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  deletePatientRequestSuccess,
  deletePatientRequestFailure,
} from '../actions/deletePatientRequestActions';
import fetchDeleteRequest from '../apis/deleteRequest';
import { logger, consoleTransport } from "react-native-logs";

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  }
};
const log = logger.createLogger(defaultConfig);

function* deleterequest({payload}) {
  try {
    const data = yield call(fetchDeleteRequest, payload);
    log.info(data, 'called');
    yield put(deletePatientRequestSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(deletePatientRequestFailure(err));
  }
}

export default function* deleteRequestSaga() {
  yield takeEvery(Types.GET_DELETE_PATIENT_REQUEST, deleterequest);
}
