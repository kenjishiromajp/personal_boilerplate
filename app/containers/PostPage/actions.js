import {
  LOAD_POSTS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS, REMOVE_POST, REMOVE_POST_ERROR,
  REMOVE_POST_SUCCESS
} from './constants';

export function loadPosts() {
  return {
    type: LOAD_POSTS,
  };
}

export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}


export function loadPostsError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}


export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export function removePostError(error) {
  return {
    type: REMOVE_POST_ERROR,
    error,
  };
}

export function postRemoved(id) {
  return {
    type: REMOVE_POST_SUCCESS,
    id,
  };
}