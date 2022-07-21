import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  putSyncHistoryerror,
  putSyncHistorysuccess,
} from '../actions/syncHistoryActions';
import fetchcaretaker from '../apis/getCaretaker';
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


function* putsynchistory({payload}) {
  try {
    const data = yield call(fetchcaretaker, payload);
    log.info(data, 'called');
    yield put(putSyncHistorysuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(putSyncHistoryerror(err));
  }
}

export default function* syncHistorySaga() {
  yield takeEvery(Types.POST_SYNC_HISTORY, putsynchistory);
} 