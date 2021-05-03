import styles from '../main.css'

const NewNoteButton = () => `
  <button 
    onClick="window.newNote('Empty note')"
    class="${styles.newNoteButton}"
  >
  <i class="far fa-edit"></i> Add note
  </button>
`;

export default NewNoteButton
