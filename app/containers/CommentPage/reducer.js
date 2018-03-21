import { fromJS } from 'immutable';
import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  REMOVE_COMMENT,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_ERROR,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT,
  EDIT_COMMENT_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: null,
  comments: {},
});

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return state.set('loading', true).set('error', null);
    case LOAD_COMMENTS_SUCCESS:
      return state.set('loading', false).set('comments', action.comments);
    case LOAD_COMMENTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case REMOVE_COMMENT:
      return state.set('loading', true).set('error', null);
    case REMOVE_COMMENT_SUCCESS:
      return state
        .set('loading', false)
        .deleteIn(['comments', action.id.toString()]);
    case REMOVE_COMMENT_ERROR:
      return state.set('loading', false).set('error', action.error);
    case CREATE_COMMENT:
      return state.set('loading', true).set('error', null);
    case CREATE_COMMENT_SUCCESS:
      return state
        .set('loading', false)
        .mergeDeep({ comments: { [action.comment.id.toString()]: action.comment } });
    case CREATE_COMMENT_ERROR:
      return state.set('loading', false).set('error', action.error);
    case EDIT_COMMENT:
      return state.set('loading', true).set('error', null);
    case EDIT_COMMENT_SUCCESS:
      return state
        .set('loading', false)
        .mergeDeep({ comments: { [action.comment.id.toString()]: action.comment } });
    case EDIT_COMMENT_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default commentReducer;
