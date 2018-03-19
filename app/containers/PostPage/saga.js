import { takeLatest, call, put, all } from 'redux-saga/effects';
import request, { requestDelete, post as postRequest } from '../../utils/request';
import { CREATE_POST, LOAD_POSTS, REMOVE_POST } from './constants';
import {
  createPostError,
  loadPostsError, postCreated,
  postRemoved,
  postsLoaded,
  removePostError,
} from './actions';
import normalizePosts from './normalizr';
import { fromJS } from '../../../node_modules/immutable/dist/immutable';

export default function* postsData() {
  yield all([
    takeLatest(LOAD_POSTS, getAllPosts),
    takeLatest(CREATE_POST, createPost),
    takeLatest(REMOVE_POST, removePost),
  ]);
}

export function* getAllPosts() {
  try {
    let posts = yield call(request, 'http://localhost:3004/posts');
    posts = fromJS(normalizePosts(posts).entities.posts);
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

export function* createPost(action) {
  try {
    const post = yield call(postRequest, 'http://localhost:3004/posts', action.post);
    yield put(postCreated(post));
  } catch (error) {
    yield put(createPostError(error));
  }
}
