import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export function login(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  };
}

export function loginSuccess(loginPages) {
  return {
    type: LOGIN_SUCCESS,
    loginPages,
  };
}


export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
