import { call,put,takeEvery } from "redux-saga/effects";
import Types from "../actions/allTypes";

import {
    LoginSuccess,
    LoginFailure,
} from '../actions/loginActions';
import sendLoginRequest from "../apis/login";
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

function* sendloginreq({payload}) {
    try{
        const data = yield call(sendLoginRequest, payload);
        log.info(data,'called');
        yield put( LoginSuccess(data));
    } catch (err) {
        log.error(err,'login error');

        yield put(LoginFailure(err));
    }

}
export default function* loginSaga() {
    yield takeEvery(Types.LOGIN_REQUEST,sendloginreq );
}


