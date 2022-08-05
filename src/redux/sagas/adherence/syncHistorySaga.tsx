import {takeLatest, call, put} from 'redux-saga/effects';
import adherences from '../../apis/adherence';
import { syncHistoryActions } from '../../actions/adherence/syncHistoryActions';
export function* syncHistorySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherences.syncmedicineHistory, payload);
    yield put(syncHistoryActions.putSyncHistorysuccess(response?.data));
  } catch (err) {
    yield put(syncHistoryActions.putSyncHistoryerror(err));
  }
}
export function* syncHistorywatcherSaga() {
  yield takeLatest(syncHistoryActions.putSyncHistory, syncHistorySaga);
} 