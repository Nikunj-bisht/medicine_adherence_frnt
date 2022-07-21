import { call, put, takeEvery } from "redux-saga/effects";
import Types from "../actions/allTypes";
import {
    fetchpatientsuccess,
    fetchpatienterror,
} from '../actions/patientRequestActions';
import fetchpatientrequests from "../apis/patientRequest";
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


function* getpatientrequest({payload}) {
    try {
        const data = yield call(fetchpatientrequests, payload);
        log.info(data, 'called');
    yield put(fetchpatientsuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(fetchpatienterror(err));
  }
}

export default function* patientRequestSaga() {
  yield takeEvery(Types.GET_PATIENT_REQUEST, getpatientrequest);
}
