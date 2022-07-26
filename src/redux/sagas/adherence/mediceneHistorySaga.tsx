import {takeLatest, call, put} from 'redux-saga/effects';
import adherence from '../../apis/getMediceneHistory';
import { getMediceneHistoryActions } from '../../actions/adherence/getMedicineHistoryActions';
export function* getMedHistorySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(adherence.getmedhistory, payload);
    yield put(getMediceneHistoryActions.getMedicineHistoryRequestSuccess(response?.data));
  } catch (err) {
    yield put(getMediceneHistoryActions.getMedicineHistoryRequestFailure(err));
  }
}
export function* getMedHistorywatcherSaga() {
  yield takeLatest(getMediceneHistoryActions.getMedicineHistoryRequest, getMedHistorySaga);
}
