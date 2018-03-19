import { takeLatest, call, put, all } from 'redux-saga/effects';
import request, { requestDelete } from '../../utils/request';
import { LOAD_POSTS, REMOVE_POST } from './constants';
import {
  loadPostsError,
  postRemoved,
  postsLoaded,
  removePostError,
} from './actions';
import normalizePosts from './normalizr';

export default function* postsData() {
  yield all([
    takeLatest(LOAD_POSTS, getAllPosts),
    takeLatest(REMOVE_POST, removePost),
  ]);
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

export function* removePost({ id }) {
  try {
    yield call(requestDelete, `http://localhost:3004/posts/${id}`);
    yield put(postRemoved(id));
  } catch (error) {
    yield put(removePostError(id, error));
  }
}
