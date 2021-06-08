import React from 'react';

import styles from './Note.css';

const Note = ({ note, isEditing }) => {
  return (
    <li className={`${styles.noteItem} ${isEditing && styles.editing}`}>
      {
        isEditing
          ? <span
            role="textbox"
            contentEditable
            placeholder="Type something..."
            className={`${styles.noteContent} ${styles.editing}`}
            id={`note${note.id}`}
          >
            {note.content}
          </span>
          : <div class={styles.noteContent}>{note.content}</div>
      }
      <div className={styles.noteControls}>
        {
          isEditing
            ?
            <button
              className={styles.noteControlsButton}
              onClick={() => { updateNote(note.id, document.querySelector("#note" + note.id).innerText) }}
            >
              <i className="far fa-save"></i>
            </button>
            :
            <button
              className={styles.noteControlsButton}
              onClick={editNote(note.id)}
            >
              <i class="fas fa-pencil-alt"></i>
            </button>
        }

      </div>
    </li>
  )
}

export default Note
