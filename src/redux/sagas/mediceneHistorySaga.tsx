import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    getMedicineHistoryRequestSuccess,
    getMedicineHistoryRequestFailure,
} from '../actions/getMedicineHistoryActions';
import fetchmedicenehistory from '../apis/getMediceneHistory';
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

function* getmedicenehistory({payload}) {
  try {
    const data = yield call(fetchmedicenehistory, payload);
    log.info(data, 'called');
    yield put(getMedicineHistoryRequestSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(getMedicineHistoryRequestFailure(err));
  }
}

export default function* mediceneHistorySaga() {
  yield takeEvery(Types.GET_MEDICENE_HISTORY, getmedicenehistory);
}
