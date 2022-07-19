import { call,put,takeEvery } from "redux-saga/effects";
import Types from "../actions/allTypes";

import {
    LoginSuccess,
    LoginFailure,
} from '../actions/loginActions';
import sendLoginRequest from "../apis/login";

function* sendloginreq({payload}) {
    try{
        const data = yield call(sendLoginRequest, payload);
        console.log(data,'called');
        yield put( LoginSuccess(data));
    } catch (err) {
        console.log(err,'login error');

        yield put(LoginFailure(err));
    }

}
export default function* loginSaga() {
    yield takeEvery(Types.LOGIN_REQUEST,sendloginreq );
}


