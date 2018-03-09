import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOAD_POSTS } from './constants';
import { loadPostsError, postsLoaded } from './actions';
import normalizePosts from './normalizr';

export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getAllPosts);
}

export function* getAllPosts() {
  try {
    let posts = yield call(request, 'http://localhost:3004/posts');
    posts = normalizePosts(posts).entities.posts;
    yield put(postsLoaded(posts));
  } catch (error) {
    yield put(loadPostsError(error));
  }
}
