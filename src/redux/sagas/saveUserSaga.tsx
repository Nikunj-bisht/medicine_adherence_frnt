import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/adherence/allTypes';
import {
    postSaveUserDetailssuccess,
    postSaveUserDetailserror,
} from '../actions/postSaveUserActions';
import postsaveuser from '../apis/postSaveUser';
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
function* post_saveuser({payload}) {
  try {
    const data = yield call( postsaveuser, payload);
    log.info(data, 'called');
    yield put( postSaveUserDetailssuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(postSaveUserDetailserror(err));
  }
}

export default function* saveUserSaga() {
  yield takeEvery(Types.POST_SAVE_USER, post_saveuser);
}
