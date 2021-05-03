import { baseURL } from './common'

import { serverErrorHandler } from './common'

const url = baseURL + '/notes'

function getNotes() {
  return fetch(url, {
    headers: {
      'Authorization': "bearer " + window.state.currentUser.token
    }
  }).then(response => {
    if (!response.ok) return serverErrorHandler(response)
    return response.json()
  })
}

function createNote() {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': "bearer " + window.state.currentUser.token
    },
    body: {},
  }).then(response => response.json())
}

function deleteNote(id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': "bearer " + window.state.currentUser.token
    },
  }).then(response => response.json())
}

function updateNote(note) {
  const { id } = note;
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "bearer " + window.state.currentUser.token,
    },
    body: JSON.stringify(note),
  }).then(response => response.json())
}

export default { getNotes, createNote, deleteNote, updateNote }
