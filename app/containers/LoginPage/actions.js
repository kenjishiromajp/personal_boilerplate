import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from './constants';

export function loginUser(username, password) {
  return {
    type: LOGIN_USER,
    username,
    password,
  };
}

export function loginUserLoaded(loginPages) {
  return {
    type: LOGIN_USER_SUCCESS,
    loginPages,
  };
}


export function loginUserError(error) {
  return {
    type: LOGIN_USER_ERROR,
    error,
  };
}
