import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    fetchAcceptRequestSuccess,
    fetchAcceptRequestError,
} from '../actions/acceptRequestActions';
import fetchAcceptRequest from '../apis/acceptRequest';

function* putacceptrequest({payload}) {
  try {
    const data = yield call(fetchAcceptRequest, payload);
    console.log(data, 'called');
    yield put(fetchAcceptRequestSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchAcceptRequestError(err));
  }
}

export default function* acceptRequestSaga() {
  yield takeEvery(Types.PUT_ACCEPT_REQUEST, putacceptrequest);
}