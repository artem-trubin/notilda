import styles from '../main.css'
import Note from './Note'

const NoteList = () => {

  if (window.state.isDataLoading) {
    return `Data is loading`
  } else {
    return `<ul class="${styles.noteList}">
      ${window.state.notes
        .map(note => Note(note))
        .reverse()
        .join('')}
    </ul>`;
  }
}
export default NoteList
