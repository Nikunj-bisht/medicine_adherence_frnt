import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    fetchpatientProfilesuccess,
    fetchpatientProfilerror,
} from '../actions/patientProfileActions';

function* fetchprofile({payload}){
    try{
        const data = yield call(fetchpatientProfile,payload);
        console.log(data, 'called');
        yield put(fetchpatientProfilesuccess(data));
    } catch(err) {
        console.log(err, 'sagg');

        yield put(fetchpatientProfilerror(err));
        
    }
}

export default function* profileSaga(){
    yield takeEvery(Types.GET_PROFILE,fetchprofile);
}