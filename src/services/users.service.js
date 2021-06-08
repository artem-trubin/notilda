import { baseURL } from './common';

const url = baseURL + '/users';

const registerUser = user => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(response => response.json());
};

const updateUser = user => {
  return fetch(`${url}/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(response => response.json());
};

const deleteUser = id => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(response => response.json());
};

export default { registerUser, updateUser, deleteUser };
