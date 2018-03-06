import { fromJS } from 'immutable';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
} from './contants';

const initialState = fromJS({
  loading: false,
  error: null,
  posts: null,
});

function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading',true);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('loading',false)
        .set('posts', action.payload.posts);
    case LOAD_POSTS_ERROR:
      return state
        .set('loading',false)
        .set('error',action.error);
    default:
      return state;
  }
}

export default postReducer;
