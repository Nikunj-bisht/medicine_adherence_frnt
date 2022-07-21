import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  fetchPatientsuccess,
  fetchPatienterror,
} from '../actions/myPatientsActions';
import { myPatients } from '../apis/patientRequest'
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

function* getpatient({payload}) {
  try {
    const data = yield call(myPatients, payload);
    log.info(data, 'called');
    yield put(fetchPatientsuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(fetchPatienterror(err));
  }
}

export default function* myPatientsSaga() {
  yield takeEvery(Types.GET_PATIENTS, getpatient);
}