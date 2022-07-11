import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  putSyncHistoryerror,
  putSyncHistorysuccess,
} from '../actions/syncHistoryActions';
import fetchcaretaker from '../apis/getCaretaker';

function* putsynchistory({payload}) {
  try {
    const data = yield call(fetchcaretaker, payload);
    console.log(data, 'called');
    yield put(putSyncHistorysuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(putSyncHistoryerror(err));
  }
}

export default function* syncHistorySaga() {
  yield takeEvery(Types.POST_SYNC_HISTORY, putsynchistory);
}