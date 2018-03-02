// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts);
}
export function* getAllPosts() {
  yield;
}
