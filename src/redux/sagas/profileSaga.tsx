import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    fetchpatientProfilesuccess,
    fetchpatientProfilerror,
} from '../actions/patientProfileActions';
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


function* fetchprofile({payload}){
    try{
        const data = yield call(fetchpatientProfile,payload);
        log.info(data, 'called');
        yield put(fetchpatientProfilesuccess(data));
    } catch(err) {
        log.error(err, 'sagg');

        yield put(fetchpatientProfilerror(err));
        
    }
}

export default function* profileSaga(){
    yield takeEvery(Types.GET_PROFILE,fetchprofile);
}