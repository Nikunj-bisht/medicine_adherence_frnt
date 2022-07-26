import {takeLatest, call, put} from 'redux-saga/effects';
import adherence from '../../apis/syncHistory';
import { syncHistoryActions } from '../../actions/adherence/syncHistoryActions';
export function* syncHistorySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherence.syncmedicineHistory, payload);
    yield put(syncHistoryActions.putSyncHistorysuccess(response?.data));
  } catch (err) {
    yield put(syncHistoryActions.putSyncHistoryerror(err));
  }
}
export function* syncHistorywatcherSaga() {
  yield takeLatest(syncHistoryActions.putSyncHistory, syncHistorySaga);
} 