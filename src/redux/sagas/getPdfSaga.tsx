import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    getPdfSuccess,
    getPdfFailure
} from '../actions/getPdfActions';
import { getPdfRequest } from '../actions/getPdfActions';

function* getpdf({payload}) {
    try{
        const data = yield call(getPdfRequest, payload);
        console.log(data, 'called');
        yield put(getPdfSuccess(data));
    } catch(err) {
        console.log(err, 'sagg');

        yield put(getPdfFailure(err));
    }
}

export default function* getPdfSaga(){
    yield takeEvery(Types.GET_SEND_PDF, getPdfRequest);
}
