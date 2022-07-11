import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    getMedicineHistoryRequestSuccess,
    getMedicineHistoryRequestFailure,
} from '../actions/getMedicineHistoryActions';
import fetchmedicenehistory from '../apis/getMediceneHistory';

function* getmedicenehistory({payload}) {
  try {
    const data = yield call(fetchmedicenehistory, payload);
    console.log(data, 'called');
    yield put(getMedicineHistoryRequestSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(getMedicineHistoryRequestFailure(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_MEDICENE_HISTORY, getmedicenehistory);
}
