import axios from 'axios'
import { token } from '.'

const baseUrl = 'http://localhost:3001/api/notes'

const getNotes = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const newNote = async note => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, note, config)
  return response.data
}

const updateNote = async note => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${note.id}`, note, config)
  return response.data
}

const deleteNote = async note => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${note.id}`, config)
  return response
}

export default {
  getNotes,
  newNote,
  updateNote,
  deleteNote,
}
