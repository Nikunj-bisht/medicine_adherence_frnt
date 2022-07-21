import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    getPdfSuccess,
    getPdfFailure
} from '../actions/getPdfActions';
import sendpdf from '../apis/getPdfRequest';
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
function* getpdf({payload}) {
    try{
        const data = yield call(sendpdf, payload);
        log.info(data, 'called');
        yield put(getPdfSuccess(data));
    } catch(err) {
        log.error(err, 'sagg');

        yield put(getPdfFailure(err));
    }
}

export default function* getPdfSaga(){
    yield takeEvery(Types.GET_SEND_PDF, getpdf);
}
