import {takeLatest, call, put} from 'redux-saga/effects';
import adherences from '../../apis/adherence';
import { syncDataActions } from '../../actions/adherence/syncDataActions';
export function* syncMedSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherences.syncmeds, payload);
    yield put(syncDataActions. postSyncDatasuccess(response?.data));
  } catch (err) {
    yield put(syncDataActions.postSyncDataerror(err));
  }
}
export function* syncMedwatcherSaga() {
  yield takeLatest(syncDataActions.postSyncData, syncMedSaga);
}