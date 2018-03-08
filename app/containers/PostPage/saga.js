import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOAD_POSTS } from './constants';
import { loadPostsError, postsLoaded } from './actions';

export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getAllPosts);
}
export function* getAllPosts() {
  try {
    const posts = yield call(request, 'http://localhost:3004/posts');
    yield put(postsLoaded(posts));
  } catch (error) {
    yield put(loadPostsError(error));
  }
}
