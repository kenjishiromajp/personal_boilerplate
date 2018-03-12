import 'whatwg-fetch';

export function getAuthHeaders() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return {
      Authorization: `Authorization ${user.token}`,
    };
  }
  return {};
}

export default function request(url, method = 'GET', _options = { headers: { 'Content-Type': 'application/json' } }) {
  let options = _options;
  if (options.headers) {
    options = {
      ...options,
      method,
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
    };
  } else {
    options = {
      ...options,
      headers: getAuthHeaders(),
    };
  }

  return fetch(url, options)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) return response;
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => {
      if (response.status === 204 || response.status === 205) return null;
      return response.json();
    });
}
