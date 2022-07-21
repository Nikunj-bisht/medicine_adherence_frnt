import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    postSyncDatasuccess,
    postSyncDataerror,
} from '../actions/syncDataActions';
import fetchAcceptRequest from '../apis/syncData';
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


function* postsyncdata({payload}) {
  try {
    const data = yield call(fetchAcceptRequest, payload);
    log.info(data, 'called');
    yield put(postSyncDatasuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(postSyncDataerror(err));
  }
}

export default function* syncDataSaga() {
  yield takeEvery(Types.POST_SYNC_DATA, postsyncdata);
}