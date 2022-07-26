import {takeLatest, call, put} from 'redux-saga/effects';
import  {careTaker} from '../../apis/getCaretaker'
import { caretakerActions } from '../../actions/caretaker/caretakerActions';
export function* caretakerSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(careTaker.caretaker, payload);
    yield put(caretakerActions.fetchCaretakerssuccess(response?.data));
  } catch (err) {
    yield put(caretakerActions.fetchCaretakerserror(err));
  }
}
export function* caretakerwatcherSaga() {
  yield takeLatest(caretakerActions.fetchCaretakers, caretakerSaga);
}