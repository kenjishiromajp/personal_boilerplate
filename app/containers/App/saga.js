import { takeLatest, call, put } from 'redux-saga/effects';
import { post } from '../../utils/request';
import { LOGIN } from './constants';
import { loginError, loginSuccess } from './actions';

export default function* getData() {
  yield takeLatest(LOGIN, getLogin);
}

export function* getLogin({ username, password }) {
  try {
    const user = yield call(post, 'http://localhost:3004/login', {
      username,
      password,
    });
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginError(error));
  }
}
