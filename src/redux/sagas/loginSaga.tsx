import { call,put,takeEvery } from "redux-saga/effects";
import Types from "../actions/allTypes";

import {
    sendLoginSuccess,
    sendLoginFailure,
} from '../actions/loginActions';
import sendLoginRequest from "../apis/login";

function* sendloginreq({payload}) {
    try{
        const data = yield call(sendLoginRequest, payload);
        console.log(data,'called');
        yield put(sendLoginSuccess(data));
    } catch (err) {
        console.log(err,'login error');

        yield put(sendLoginRequest(err));
    }

}
export default function* loginSaga() {
    yield takeEvery(Types.GET_USER_LOGIN,sendloginreq );
}


