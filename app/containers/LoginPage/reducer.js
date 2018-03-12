import { fromJS } from 'immutable';
import {
  LOAD_LOGIN_PAGES,
  LOAD_LOGIN_PAGES_SUCCESS,
  LOAD_LOGIN_PAGES_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: null,
  loginPages: null,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LOGIN_PAGES:
      return state
        .set('loading', true)
        .set('error', null);
    case LOAD_LOGIN_PAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('loginPages', action.loginPages);
    case LOAD_LOGIN_PAGES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default loginPageReducer;
