import styled from 'styled-components'
import {useEffect, useState} from 'react'

import {
  Notebooks, Notes, MainArea
} from '../components'

import notebooksService from '../services/notebooks'
import notesService from '../services/notes'

export function VaultPage({currentUser}) {

  const [notebooks, setNotebooks] = useState(null)
  const [notes, setNotes] = useState(null)
  const [currentNotebook, setCurrentNotebook] = useState(null)
  const [currentNote, setCurrentNote] = useState(null)

  useEffect(() => {
    async function getAllNotebooks() {
      setNotebooks(await notebooksService.getNotebooks())
    }
    getAllNotebooks()
  }, [])

  useEffect(() => {
    async function getAllNotes() {
      // setNotes(await notesService.getNotes())
      const fetchedNotes = await notesService.getNotes()
      setNotes(fetchedNotes)
    }
    getAllNotes()
  }, [])
  
  if (!notebooks) {
    return <div>Now loading...</div>
  }

  async function createNotebook() {
    const notebook = {
      name: "test",
    }
    const createdNotebook = await notebooksService.newNotebook(notebook)
    setNotebooks([...notebooks, createdNotebook])
  }

  async function updateNotebook(notebook) {
    const updatedNotebook = await notebooksService.updateNotebook(notebook)
    setNotebooks(notebooks.map(notebookItem => notebookItem.id === updatedNotebook.id ? updatedNotebook : notebookItem))
  }

  async function deleteNotebook(notebook) {
    await notebooksService.deleteNotebook(notebook)
    setNotebooks(notebooks.filter(notebookItem => notebookItem.id !== notebook.id))
    setCurrentNotebook(null)
  }

  async function createNote() {
    const note = {
      content: 'Testing note',
      notebook: currentNotebook.id,
      author: currentUser.id,
    }
    const createdNote = await notesService.newNote(note)
    setNotes([...notes, createdNote])
    setCurrentNote(createdNote)
  }

  async function updateNote(note) {
    const updatedNote = await notesService.updateNote(note)
    setNotes(notes.map(noteItem => noteItem.id === updatedNote.id ? updatedNote : noteItem))
  }

  async function deleteNote(note) {
    await notesService.deleteNote(note)
    setNotes(notes.filter(noteItem => noteItem.id !== note.id))
    setCurrentNote(null)
  }

  return (
    <VaultContainer>
      <Notebooks
        currentUser={currentUser}
        notebooks={notebooks}
        setNotebooks={setNotebooks}
        setCurrentNotebook={setCurrentNotebook} 
        currentNotebook={currentNotebook}
        createNotebook={createNotebook}
        updateNotebook={updateNotebook}
        deleteNotebook={deleteNotebook}
      />
      <Notes 
        notes={notes}
        setNotes={setNotes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        currentNotebook={currentNotebook}
        createNote={createNote}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
      <MainArea currentNote={currentNote} />
    </VaultContainer>
  )
}

const VaultContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`
