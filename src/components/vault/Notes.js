import styled from 'styled-components'

import {Note, CreateNewButton} from '.'

export function Notes ({
  notes, 
  currentNotebook, 
  currentNote,
  createNote,
  updateNote,
  deleteNote,
  setCurrentNote,
}) {
  
  return (
    <NotesContainer>
      {
        currentNotebook
        ? <>
            <CreateNewButton text="New note" handleClick={createNote}/>
            {
              notes
                ? notes.filter(note => note.notebook === currentNotebook.id).map(note => 
                <Note 
                  key={note.id} 
                  note={note}
                  setCurrentNote={setCurrentNote} 
                />) 
                : 'There are no notes yet'
            }
        </>
        : 'Select a notebook'
        // 
      }
    </NotesContainer>  
  )
}

const NotesContainer = styled.div`
  width: 15%;
  height: 100%;
  
  border-right: 1px solid lightgrey;
`
