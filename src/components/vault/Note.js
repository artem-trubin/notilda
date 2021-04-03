import styled from 'styled-components'

export function Note({note, currentNote, setCurrentNote}) {
  return (
    <NoteContainer
      className={currentNote && currentNote.id === note.id
        ? 'current'
        : ''
      }
      onClick={() => {setCurrentNote(note)}}
    >
      {note.content}
    </NoteContainer>
  )
}

const NoteContainer = styled.div`
  height: 50px;
  
  padding: 0px 10px;
  
  display: flex;
  justify-content: space-between;

  font-size: 20px;

  line-height: 50px;
  &.current {
    background: yellow;
  }
`
