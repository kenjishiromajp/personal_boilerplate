import 'whatwg-fetch';

export default function request(url, options) {
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
