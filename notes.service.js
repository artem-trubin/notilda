const url = 'http://localhost:4200/api/notes'

function getNotes() {
  return fetch(url)
    .then(response => response.json())
}

function createNote() {
  return fetch(url, {
    method: 'POST',
    body: {},
  }).then(response => response.json())
}

function deleteNote(id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
}

function updateNote(note) {
  const { id } = note;
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  }).then(response => response.json())
}

export default { getNotes, createNote, deleteNote, updateNote }
