import {spawn} from 'redux-saga/effects';
import caretakerSaga from './caretakerSaga';
import loginSaga from './loginSaga';

function* rootsaga() {
  yield spawn(caretakerSaga);
  //yield spawn();
  yield spawn(loginSaga);
}

export default rootsaga;
