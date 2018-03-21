import { takeLatest, call, put, all } from 'redux-saga/effects';
import request, {
  deleteRequest,
  putRequest,
  postRequest,
} from '../../utils/request';
import { CREATE_COMMENT, EDIT_COMMENT, LOAD_COMMENTS, REMOVE_COMMENT } from './constants';
import {
  createCommentError,
  editCommentError,
  loadCommentsError,
  commentCreated,
  commentEdited,
  commentRemoved,
  commentsLoaded,
  removeCommentError,
} from './actions';
import normalizeComments from './normalizr';
import { fromJS } from '../../../node_modules/immutable/dist/immutable';
import { API_URL } from '../../utils/constants';

export default function* commentsData() {
  yield all([
    takeLatest(LOAD_COMMENTS, getAllComments),
    takeLatest(CREATE_COMMENT, createComment),
    takeLatest(EDIT_COMMENT, editComment),
    takeLatest(REMOVE_COMMENT, removeComment),
  ]);
}

export function* getAllComments() {
  try {
    let comments = yield call(request, `${API_URL}/comments`);
    comments = comments.length ? normalizeComments(comments).entities.comments : {};
    comments = fromJS(comments);
    yield put(commentsLoaded(comments));
  } catch (error) {
    yield put(loadCommentsError(error));
  }
}

export function* createComment({ resolve, reject, ...action }) {
  try {
    const comment = yield call(postRequest, `${API_URL}/comments`, action.comment);
    yield put(commentCreated(comment));
    resolve(comment);
  } catch (error) {
    yield put(createCommentError(error));
    reject(error);
  }
}

export function* editComment({ resolve, reject, ...action }) {
  try {
    const comment = yield call(
      putRequest,
      `${API_URL}/comments/${action.comment.id}`,
      action.comment
    );
    yield put(commentEdited(comment));
    resolve(comment);
  } catch (error) {
    yield put(editCommentError(error));
    reject(error);
  }
}

export function* removeComment({ id }) {
  try {
    yield call(deleteRequest, `${API_URL}/comments/${id}`);
    yield put(commentRemoved(id));
  } catch (error) {
    yield put(removeCommentError(id, error));
  }
}
