import { baseURL } from './common';

const login = credentials => {
  return fetch(baseURL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(response => response.json());
};

export default { login };
