import { takeLatest, call, put } from 'redux-saga/effects';
import { post } from '../../utils/request';
import { loginUserError, loginUserLoaded } from './actions';
import { LOGIN_USER } from '../App/constants';

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