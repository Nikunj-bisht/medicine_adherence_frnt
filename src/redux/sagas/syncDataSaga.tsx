import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    postSyncDatasuccess,
    postSyncDataerror,
} from '../actions/syncDataActions';
import fetchAcceptRequest from '../apis/syncData';

function* postsyncdata({payload}) {
  try {
    const data = yield call(fetchAcceptRequest, payload);
    console.log(data, 'called');
    yield put(postSyncDatasuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(postSyncDataerror(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.POST_SYNC_DATA, postsyncdata);
}