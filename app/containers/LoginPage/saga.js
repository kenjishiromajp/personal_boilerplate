import { takeLatest, call, put } from 'redux-saga/effects';
import { post } from '../../utils/request';
import { LOGIN_USER } from './constants';
import { loginUserError, loginUserLoaded } from './actions';

export default function* loginPagesData() {
  yield takeLatest(LOGIN_USER, getAllLoginUser);
}

export function* getAllLoginUser(action) {
  try {
    const { username, password } = action;
    const user = yield call(post, 'http://localhost:3004/login', { username, password });
    yield put(loginUserLoaded(user));
  } catch (error) {
    yield put(loginUserError(error));
  }
}