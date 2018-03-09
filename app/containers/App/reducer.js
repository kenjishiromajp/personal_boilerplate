import { fromJS } from 'immutable';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './constants';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR, TOGGLE_SIDEBAR } from '../../layouts/DefaultLayout/constants';
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  sidebarOpened: true,
  userData: {},
});

function appReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case LOGIN_USER:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData'], false);
    case LOGIN_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('currentUser', action.username);
    case LOGIN_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case TOGGLE_SIDEBAR:
      return state
        .set('sidebarOpened', !state.get('sidebarOpened'));
    case OPEN_SIDEBAR:
      return state
        .set('sidebarOpened', true);
    case CLOSE_SIDEBAR:
      return state
        .set('sidebarOpened', false);
    default:
      return state;
  }
}
export default appReducer;
