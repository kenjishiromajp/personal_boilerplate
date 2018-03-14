import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';

export default function* getData() {
  yield takeLatest('LOGIN', getLogin);
}

export function* getLogin() {
  try {
    // console.log('doido');
    // let posts = yield call(request, 'http://localhost:3004/posts');
    // posts = normalizePosts(posts).entities.posts;
    // yield put(postsLoaded(posts));
  } catch (error) {
    // yield put(loadPostsError(error));
  }
}
