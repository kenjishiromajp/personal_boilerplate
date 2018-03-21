import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS,
  REMOVE_COMMENT,
  REMOVE_COMMENT_ERROR,
  REMOVE_COMMENT_SUCCESS,
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT,
  EDIT_COMMENT_ERROR,
  EDIT_COMMENT_SUCCESS,
} from './constants';

// COMMENT LOAD

export function loadComments() {
  return {
    type: LOAD_COMMENTS,
  };
}

export function commentsLoaded(comments) {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments,
  };
}

export function loadCommentsError(error) {
  return {
    type: LOAD_COMMENTS_ERROR,
    error,
  };
}
// END COMMENT LOAD

// CREATE COMMENT
export function createComment(comment, resolve, reject) {
  return {
    type: CREATE_COMMENT,
    comment,
    resolve,
    reject,
  };
}

export function createCommentError(error) {
  return {
    type: CREATE_COMMENT_ERROR,
    error,
  };
}

export function commentCreated(comment) {
  return {
    type: CREATE_COMMENT_SUCCESS,
    comment,
  };
}
// END CREATE COMMENT

// EDIT COMMENT
export function editComment(comment, resolve, reject) {
  return {
    type: EDIT_COMMENT,
    comment,
    resolve,
    reject,
  };
}

export function editCommentError(error) {
  return {
    type: EDIT_COMMENT_ERROR,
    error,
  };
}

export function commentEdited(comment) {
  return {
    type: EDIT_COMMENT_SUCCESS,
    comment,
  };
}
// END EDIT COMMENT

// REMOVE COMMENT
export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  };
}

export function removeCommentError(error) {
  return {
    type: REMOVE_COMMENT_ERROR,
    error,
  };
}

export function commentRemoved(id) {
  return {
    type: REMOVE_COMMENT_SUCCESS,
    id,
  };
}

// END REMOVE COMMENT
