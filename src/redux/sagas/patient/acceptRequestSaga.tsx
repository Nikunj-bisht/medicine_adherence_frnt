import {takeLatest, call, put} from 'redux-saga/effects';
import { acceptRequestActions } from '../../actions/patient/acceptRequestActions';
import { acceptRequest } from '../../apis/acceptRequest';
export function* reqAcceptSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(acceptRequest.reqAccept, payload);
    yield put(acceptRequestActions.fetchAcceptRequestSuccess(response?.data));
  } catch (err) {
    yield put(acceptRequestActions.fetchAcceptRequestError(err));
  }
}
export function* reqAcceptwatcherSaga() {
  yield takeLatest(acceptRequestActions.fetchAcceptRequest, reqAcceptSaga);
}