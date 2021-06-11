import { baseURL } from './common';

import { serverErrorHandler } from './common';

const url = baseURL + '/notes';

function getNotes(currentUser) {
  return fetch(url, {
    headers: {
      Authorization: 'bearer ' + currentUser.token,
    },
  }).then(response => {
    if (!response.ok) return serverErrorHandler(response);
    return response.json();
  });
}

function createNote(currentUser) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'bearer ' + currentUser.token,
    },
    body: {},
  }).then(response => response.json());
}

function deleteNote(currentUser, id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'bearer ' + currentUser.token,
    },
  }).then(response => response.json());
}

function updateNote(currentUser, note) {
  const { id } = note;
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + currentUser.token,
    },
    body: JSON.stringify(note),
  }).then(response => response.json());
}

export default { getNotes, createNote, deleteNote, updateNote };
