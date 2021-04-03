import axios from 'axios'
import { token } from '.'

const baseUrl = 'http://localhost:3001/api/notebooks'

const getNotebooks = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const newNotebook = async notebook => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, notebook, config)
  return response.data
}

const updateNotebook = async notebook => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${notebook.id}`, notebook, config)
  return response.data
}

const deleteNotebook = async notebook => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${notebook.id}`, config)
  return response.data
}

export default {
  getNotebooks, 
  newNotebook, 
  updateNotebook,
  deleteNotebook
} 
