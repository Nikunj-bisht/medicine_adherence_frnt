import {takeLatest, call, put} from 'redux-saga/effects';
import {Signupuser} from '../../repositories/signup/signUp';
import {loginActions} from '../actions/loginActions';
export function* loginSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(Signupuser.loginuser, payload);
    yield put(loginActions.LoginSuccess(response?.data));
  } catch (err) {
    yield put(loginActions.LoginFailure(err));
  }
}
export function* loginWatcherSaga() {
  yield takeLatest(loginActions.sendLoginRequest, loginSaga);
}

