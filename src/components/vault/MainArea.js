import { ControlBar } from '.'

export function MainArea({currentNote}) {
  
  return (
    <div>
      <ControlBar />
      {
        currentNote
        ? currentNote.content
        : 'Please choose a note'
      }
    </div>
  )
} 
