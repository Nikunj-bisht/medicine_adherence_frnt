import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
    postSaveUserDetailssuccess,
    postSaveUserDetailserror,
} from '../actions/postSaveUserActions';
import postsaveuser from '../apis/postSaveUser';

function* post_saveuser({payload}) {
  try {
    const data = yield call( postsaveuser, payload);
    console.log(data, 'called');
    yield put( postSaveUserDetailssuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(postSaveUserDetailserror(err));
  }
}

export default function* saveUserSaga() {
  yield takeEvery(Types.POST_SAVE_USER, post_saveuser);
}
