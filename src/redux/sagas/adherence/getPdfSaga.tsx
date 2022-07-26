import {takeLatest, call, put} from 'redux-saga/effects';
import downloadPdf from '../../apis/getPdfRequest';
import { getPdfActions } from '../../actions/adherence/getPdfActions';
export function* downloadPdfSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(downloadPdf.downloadPdf, payload);
    yield put(getPdfActions.getPdfSuccess(response?.data));
  } catch (err) {
    yield put(getPdfActions.getPdfFailure(err));
  }
}
export function* downloadPdfwatcherSaga() {
  yield takeLatest(getPdfActions.getPdfRequest, downloadPdfSaga);
}