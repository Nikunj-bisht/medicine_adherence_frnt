import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    fetchAcceptRequestSuccess,
    fetchAcceptRequestError,
} from '../actions/acceptRequestActions';
import fetchAcceptRequest from '../apis/acceptRequest';
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

function* putacceptrequest({payload}) {
  try {
    const data = yield call(fetchAcceptRequest, payload);
    log.info(data, 'called');
    yield put(fetchAcceptRequestSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(fetchAcceptRequestError(err));
  }
}

export default function* acceptRequestSaga() {
  yield takeEvery(Types.PUT_ACCEPT_REQUEST, putacceptrequest);
}