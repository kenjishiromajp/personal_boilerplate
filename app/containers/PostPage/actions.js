import { LOAD_POSTS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS } from './contants';

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
