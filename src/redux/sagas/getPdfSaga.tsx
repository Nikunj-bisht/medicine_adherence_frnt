import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    getPdfSuccess,
    getPdfFailure
} from '../actions/getPdfActions';
import sendpdf from '../apis/getPdfRequest';


function* getpdf({payload}) {
    try{
        const data = yield call(sendpdf, payload);
        console.log(data, 'called');
        yield put(getPdfSuccess(data));
    } catch(err) {
        console.log(err, 'sagg');

        yield put(getPdfFailure(err));
    }
}

export default function* getPdfSaga(){
    yield takeEvery(Types.GET_SEND_PDF, getpdf);
}
