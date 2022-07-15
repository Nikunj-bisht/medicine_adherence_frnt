import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import Types from '../../actions/allTypes';
import { sendReqCaretakerFailed, sendReqCaretakerSuccess } from '../../actions/caretaker/reqCaretakerActions';
import reqcaretaker from '../../apis/reqcaretaker';
const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};
var log = logger.createLogger(defaultConfig);
function* reqCaretaker({payload}) {
  try {
    const data = yield call(reqcaretaker,payload);
    log.info(data, 'called');
    yield put(sendReqCaretakerSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(sendReqCaretakerFailed(err));
  }
}

export default function* reqCaretakerSaga() {
  yield takeEvery(Types.SEND_CARETAKER_REQUEST, reqCaretaker);
}
