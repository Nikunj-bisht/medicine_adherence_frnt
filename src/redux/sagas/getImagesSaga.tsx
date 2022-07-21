import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  getImageSuccess,
  getImageFailure,
} from '../actions/getImagesActions';
import getImageRequest from '../apis/getImages';
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

function* getimages({payload}) {
  try {
    const data = yield call(getImageRequest, payload);
    log.info(data, 'called');
    yield put(getImageSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(getImageFailure(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_IMAGES, getimages);
}
