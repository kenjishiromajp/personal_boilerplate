import { fromJS } from 'immutable';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: null,
  posts: null,
});

function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', null);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('posts', action.posts);
    case LOAD_POSTS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default postReducer;
