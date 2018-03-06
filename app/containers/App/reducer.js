import { fromJS } from 'immutable';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './constants';
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {},
});

function appReducer(state = initialState, action) {
  const type = action;
  switch (type){
    case LOGIN_USER:
      return state
        .set('loading',true)
        .set('error', false)
        .setIn(['userData'], false);
    case LOGIN_USER_SUCCESS:
      return state
        .set('loading',false)
        .set('error', false)
        .set('currentUser', action.payload.username);
    case LOGIN_USER_ERROR:
      return state
        .set('loading',false)
        .set('error', action.payload.error);
    default:
      return state;
  }
}
export default appReducer;